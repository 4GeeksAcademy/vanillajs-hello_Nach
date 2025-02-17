import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  let string = ""
  for (let i = 0; i < 4; i++) {
    if (i == 0) {
      string += who[Math.floor(Math.random() * who.length)] + " "
    }
    else if (i == 1) {
      string += action[Math.floor(Math.random() * action.length)] + " "
    }
    else if (i == 2) {
      string += what[Math.floor(Math.random() * what.length)] + " "
    }
    else if (i == 3) {
      string += when[Math.floor(Math.random() * when.length)]
    }
  }
  console.log(string)
  document.getElementById("excuse").innerHTML = string;

};


