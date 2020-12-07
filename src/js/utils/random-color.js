import _ from "lodash";

let color;

let randomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let update = () => {
    color = randomColor();
};

let get = () => {
  return color;
}

randomColor();

export default {update, get};