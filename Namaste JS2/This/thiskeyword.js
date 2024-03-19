//  this in global space

//  console.log(this); // globalObjects

//this inside a function

console.log(this); //indow {window: Window, self: Window, document: document, name: '', location: Location, …}
function x ()
{
    console.log(this);  // undefined
}