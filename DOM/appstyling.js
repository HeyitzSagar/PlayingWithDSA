//  DOM Manipulation

//<-------------------------- Changing the color of the DOM manipulations --------------------->

// const title = document.getElementById("Main-Heading");

// title.style.color = "red";
// console.log(title);

const listitem = document.querySelectorAll("li");
// since querySelectorAll always returns nodelist array so we need to
// make it a traverse and need to loop it.

for (let i = 0; i < listitem.length; i++) {
  listitem[i].style.color = "red"; //making a change in the listitem for its color
}
// console.log(listitem);

// creating an element 

const ul = document.querySelector('ul');

const li = document.createElement
