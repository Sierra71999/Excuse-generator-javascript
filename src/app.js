/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
//1. organize sits and value into an array
//These are not in a function so it can be accessed outside the function -Global Variable
//   let icon = ["♠", "♥", "♣", "♦"]; // why was this originally outside a function If i put this here instead of in the get_icon function?????
//   let value = [
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "K",
//     "Q",
//     "A",
//     "J"
//   ];

//   let randomCard = () => {
//     //2.randomly get icons and values
//     let get_icon = () => {
//       let random_icon = icon[Math.floor(Math.random() * icon.length)];

//       return icon[random_icon];
//     };
//     let get_value = () => {
//       let random_value = value[Math.floor(Math.random() * value.length)];
//       return value[random_value];
//     };

//     //if its hearts and dimonds = red .icon-top connects this too the html
//     if (icon == "♥" || icon == "♦") {
//       document.querySelector(".icon-top").style.color = "red";
//       document.querySelector(".number").style.color = "red";
//       document.querySelector(".icon-bottom").style.color = "red";
//     } else {
//       document.querySelector(".icon-top").style.color = "black";
//       document.querySelector(".number").style.color = "black";
//       document.querySelector(".icon-bottom").style.color = "black";
//     }
//   }; //console.log(random_icon + random_value + random_icon);
//4. apply the new created suit and value to your index.html file //const iconCalled = `<p>${random_icon}</p>`;
//3.apply suit and value to a string template '' to create and html element `<h1></h1>`

//   randomCard();
// };

// document.querySelector("button").addEventListener;
window.onload = function() {
  let icon = generateIcon();
  if (icon == "♦" || icon == "♥") {
    document.querySelector(".top-icon").style.color = "red";
    document.querySelector(".bottom-icon").style.color = "red";
    document.querySelector(".number").style.color = "red";
  } else {
    document.querySelector(".top-icon").style.color = "black";
    document.querySelector(".bottom-icon").style.color = "black";
    document.querySelector(".number").style.color = "black";
  }
  document.querySelector(".top-icon").innerHTML = icon;
  document.querySelector(".bottom-icon").innerHTML = icon;
  document.querySelector(".number").innerHTML = generateRandomNumber();
  // let colors = generateColors();
};
let generateRandomNumber = () => {
  console.log("test");
  let numAvaiable = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q"
  ];
  let number = Math.floor(Math.random() * numAvaiable.length);
  return numAvaiable[number];
};
let generateIcon = () => {
  let icon = ["♠", "♥", "♣", "♦"];
  let indexIcon = Math.floor(Math.random() * icon.length);

  return icon[indexIcon];
};

let buttonGen = () => {
  let icon = generateIcon();
  if (icon == "♦" || icon == "♥") {
    document.querySelector(".top-icon").style.color = "red";
    document.querySelector(".bottom-icon").style.color = "red";
    document.querySelector(".number").style.color = "red";
  } else {
    document.querySelector(".top-icon").style.color = "black";
    document.querySelector(".bottom-icon").style.color = "black";
    document.querySelector(".number").style.color = "black";
  }
  document.querySelector(".top-icon").innerHTML = icon;
  document.querySelector(".bottom-icon").innerHTML = icon;
  document.querySelector(".number").innerHTML = generateRandomNumber();

  // let colors = generateColors();
};

document.querySelector("button").addEventListener("click", () => buttonGen());
