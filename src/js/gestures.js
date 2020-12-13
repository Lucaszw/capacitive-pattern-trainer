import { el, mount } from "redom";
import BSN from "bootstrap.native/dist/bootstrap-native.esm.min.js";
import _ from "lodash";
import waitUntil from "async-wait-until";

import randomColor from "./utils/random-color";
import TouchArea from "./touch-area";
import API from "./api";

const modalHTML = `
<div class="modal fade" id="settingsModal" tabindex="-1" role="dialog" aria-labelledby="settingsModalTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="settingsModalTitle">Add touch pattern</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="add-gesture">
            <input class="form-control" type="text" placeholder="Gesture Name" />
            <button id="addGestureBtn" class="btn btn-secondary">Add gesture</button>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`;

const newGestureHTML = `
    <div class="new-gesture card">
        <dt>Gesture Name</dt>
        <dd><span class="entry-count">0</span><span> entries</span></dd>
        <div class="btn btn-danger close-btn">✕</div>
    </div>
`;

class Gestures {
  constructor() {
    API.cards.findAll().then((cards) => {
      this.gestures = cards;
    });
    this.modal = null;
  }

  async updateCount() {
    for (let gesture of this.gestures) {
      let data = await API.cards.find(gesture.id);
      let element = this.container.querySelector(`#gesture-${gesture.id}`);
      element.querySelector(".entry-count").innerHTML = data.samples.length;
    }
  }

  async loaded() {
    if (this.gestures) return;
    await waitUntil(() => {
      return this.gestures;
    });
    return;
  }

  async draw(options) {
    await this.loaded();

    this.remove();

    this.container = el("div", { innerHTML: modalHTML }).children[0];
    mount(document.body, this.container);
    this.modal = new BSN.Modal("#settingsModal", { backdrop: true });

    this.container.querySelector(
      "#addGestureBtn"
    ).onclick = this.createGesture.bind(this);

    _.each(this.gestures, (gesture) => {
      this.addGesture(gesture.name, gesture.id);
    });
    
    this.updateCount();
  }

  remove() {
    if (this.container) this.container.remove();
  }

  async show() {
    await this.loaded();
    this.modal.show();
    this.updateCount();
  }

  async addGesture(name, id) {
    let gesture = el("div", { innerHTML: newGestureHTML }).children[0];
    mount(this.container.querySelector(".modal-body"), gesture);
    gesture.querySelector("dt").innerHTML = name;
    gesture.onclick = this.toggleGesture.bind(this, gesture, id);
    gesture.name = name;
    gesture.id = `gesture-${id}`;
    gesture.querySelector(".close-btn").onclick = this.deleteGesture.bind(
      this,
      id
    );
  }

  async createGesture() {
    let name = this.container.querySelector("#add-gesture .form-control").value;
    let gesture = await API.cards.create(name);
    this.gestures.push(gesture);
    this.addGesture(gesture.name, gesture.id);
  }

  async deleteGesture(id, e) {
    e.stopPropagation();
    let card = await API.cards.delete(id);
    _.remove(this.gestures, { id: card.id });

    await this.draw();
    await this.show();
  }

  async expandGesture(gesture, cardId) {
    gesture._expanded = true;
    gesture.classList.add("expanded");
    let data = await API.cards.samples(cardId).findAll();

    for (let i = 0; i < data.length; i++) {
      let touches = data[i].touches;
      let sampleId = data[i].id;

      let touchArea = new TouchArea({
        parent: el(".touch-container"),
        avoidListeners: true
      });
      mount(gesture, touchArea.parent);
      let bbox = touchArea.parent.getBoundingClientRect();

      touchArea.parent.onclick = async (e) => {
        e.stopPropagation();
        data.splice(i, 1);
        await API.cards.samples(cardId).delete(sampleId);

        touchArea.remove();
        touchArea.parent.remove();
        this.updateCount();
      };

      touchArea.draw({ width: bbox.width, height: bbox.height });

      let scaleX = bbox.width / window.innerWidth;
      let scaleY = bbox.height / window.innerHeight;

      randomColor.update();
      for (let touch of touches) {
        touchArea.drawCircle(touch.x * scaleX, touch.y * scaleY, 10);
      }
    }
  }

  collapseGesture(gesture) {
    gesture._expanded = false;
    gesture.classList.remove("expanded");
    for (let container of gesture.querySelectorAll(".touch-container")) {
      container.remove();
    }
  }

  toggleGesture(gesture, id) {
    if (gesture._expanded) this.collapseGesture(gesture, id);
    else if (!gesture._expanded) this.expandGesture(gesture, id);
  }
}
export default Gestures;
