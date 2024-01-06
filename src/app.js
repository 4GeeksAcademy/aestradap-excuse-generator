/* eslint-disable */
import "bootstrap";
import "./style.css";

import { who, action, what, when } from "./text";
import { images } from "./images";

window.onload = function() {
  // console.log("Hello Rigo from the console!");
  let dExcuse = "The dog crushed my homework when I finished";

  const rIndex = () => Math.floor(Math.random() * 4 + 1) - 1;

  const concatExcuse = () => {
    dExcuse = `${who[rIndex()]} ${action[rIndex()]} ${what[rIndex()]} 
    ${when[rIndex()]}`;
    return dExcuse;
  };

  const onload = dExcuse => {
    // document.getElementById("excuse").innerHTML = concatExcuse(dExcuse);
    // document.getElementById("image").setAttribute("src", images[rIndex()]);
    document.querySelector("#excuse").textContent = concatExcuse(dExcuse);
    document.querySelector("#image").setAttribute("src", images[rIndex()]);
  };

  onload(dExcuse);
};
