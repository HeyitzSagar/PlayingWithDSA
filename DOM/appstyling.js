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

// 