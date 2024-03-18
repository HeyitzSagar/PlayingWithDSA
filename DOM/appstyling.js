//  DOM Manipulation

//<-------------------------- Changing the color of the DOM manipulations --------------------->

// const title = document.getElementById("Main-Heading");

// title.style.color = "red";
// console.log(title);

// const listitem = document.querySelectorAll("li");
// since querySelectorAll always returns nodelist array so we need to
// make it a traverse and need to loop it.

// for (let i = 0; i < listitem.length; i++) {
//   listitem[i].style.color = "red"; //making a change in the listitem for its color
// }
// console.log(listitem);

// creating an element

// const ulitem = document.querySelector('ul');

// 4 pillars of DOM

// <------------------------------ Pillars of the DOM ------------------>

// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener

// Selection of an element

// var a = document.querySelector("h1");
// console.log(a);

// changing HTML

// var a = document.querySelector("h1");
// a.innerHTML = "Changed HTML";

// Changing CSS

// var a  = document.querySelector("h1");
// a.style.color = "red";
// a.style.backgroundColor = "black";

//  Event Listener

// Event  ---  something which is happening and listener means who is listening

// var a = document.querySelector("h1");

// a.addEventListener("click", function(){
//   console.log('h1 got clicked');
// })
// a.addEventListener("click", function()
// {
//   alert("Hahahah");
// })

// a.addEventListener("click", function () {
//   a.innerHTML = "you are beautifull";
//   a.style.color = "Yellow";
//   a.style.backgroundColor = "Black";
// });

// var bulb = document.querySelector(".bulb");
// var btn = document.querySelector("button");

// var flag = 0;

// btn.addEventListener("click", function () {
//   if (flag == 0) {
//     bulb.style.backgroundColor = "Yellow";
//     console.log("CLicked to on the bulb");
//     btn.innerHTML = "ON";
//     flag = 1;
//   } else {
//     bulb.style.backgroundColor = "transparent";
//     console.log("Again clicked to switch off");
//     btn.innerHTML = "Off";
//     flag = 0;
//   }
// });

//  Selecting multiple elements at a single time

// var a  = document.querySelectorAll("li");
// // document.getElementByclassName();
// a.forEach((e) => {
//   console.log(e);
// })
// console.log(a);

// document.getElementById("box")

//  difference between textcontent and innerHTML

//  textcontext basically prints the data it doesnt
//  changes it into the tag
//  whereas innerHtml changes the data into tags as
//  given in the strings that is main diff

//  future projects

// projects on the basis of js dom
// project-1 to send a friend request on insta
// on click that heart popup instagram feature
// insta ka stroy wala features

// creating the first project button add friend/ cancel request

// var a = document.querySelector("button");

// let flag = 0;

// a.addEventListener("click", () => {
//   if (flag == 0) {
//     a.innerHTML = "Cancel Request";
//     flag = 1;
//   } else {
//     a.innerHTML = "Add Friend";
//     flag = 0;
//   }
// });

// creating the second project which is heart popup
//  on like functionalitie

//  creating an counter using dom

// var a = document.querySelector(".add");
// var value = document.querySelector(".value");
// a.addEventListener("click", () => {
//   value.innerHTML = +value.innerHTML + 1;
// });
// var sub = document.querySelector(".sub");

// sub.addEventListener("click", () => {
//   if (value.innerHTML > 0) {
//     value.innerHTML = +value.innerHTML - 1;
//   }
// });

//  creating a timer app

// var value = document.querySelector(".value");

// var starttimer = document.querySelector(".Start");
// var stoptimer = document.querySelector(".Stop");
// let intervalID;
// starttimer.addEventListener("click", function () {
//   intervalID = setInterval(() => {
//     value.innerHTML = +value.innerHTML + 1;
//   }, 1000);
// });

// stoptimer.addEventListener("click", function () {
//   clearInterval(intervalID);
//   value.innerHTML = +0;
// });


const fetchdata = async() => {
    const user = await fetch('https://api.github.com/users/HeyitzSagar');
    console.log(user);
};
console.log(fetchdata())

// const user  = fetch('https://github.com/HeyitzSagar');
// console.log(user);

// var value = document.querySelector(".value");
// value.remove();
