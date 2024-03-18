let name = {
    firstname : "Sagar",
    lastname : "Gupta",
}

 function printfullName(hometown, state) {
    console.log(this.firstname+ " " + this.lastname + "from" + hometown + "," + state);
}
// name.printfullName();

let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar",
}

// function borrowing
//   we can borrow function methods from other methods using call 

// name.printfullName.call(name2);

// printfullName.call(name2);
// printfullName.call(name);

// the only difference between call and
//  apply method is the way we pass arguments

//   passing the arugments individually in call 
// in apply method we pass in the form of arraylist

// printfullName.apply(name, ["Mumbai", "Maharasthra"])

//  the bind looks exaclty similar to the call but it 
//  binds the values and return a functions

// let printmyname = printfullName.bind(name2,"Patna", "Bihar");
// printmyname();

