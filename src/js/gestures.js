import { el, mount } from "redom";
import BSN from "bootstrap.native/dist/bootstrap-native.esm.min.js";
import _ from "lodash";

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
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`;

const newGestureHTML = `
    <div class="new-gesture card">
        <dt>Gesture Name</dt>
        <dd><span class="entry-count">0</span><span> entries</span></dd>
    </div>
`;

class Gestures {
  constructor() {
      let prevGestures = JSON.parse(localStorage.getItem("gestures") || "{}");
      this.gestures = prevGestures;
  }

  draw() {
    this.container = el("div", {innerHTML: modalHTML}).children[0];
    mount(document.body, this.container);
    this.modal = new BSN.Modal('#settingsModal', { backdrop: true });

    this.container.querySelector("#addGestureBtn").onclick = this.createGesture.bind(this);
    _.each(this.gestures, (gesture, name) => {
        this.addGesture(name);
    });
    
  }

  show() {
    this.modal.show();
  }

  addGesture(name) {
    let gesture = this.gestures[name] = el("div", {innerHTML: newGestureHTML}).children[0];
    mount(this.container.querySelector(".modal-body"), gesture);
    gesture.querySelector("dt").innerHTML = name;
    this.save();
  }

  createGesture() {
    let name = this.container.querySelector("#add-gesture .form-control").value;
    this.addGesture(name);
  }

  save() {
      localStorage.setItem("gestures", JSON.stringify(this.gestures));
  }

}

export default Gestures;