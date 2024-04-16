class person {
    constructor(n, age)
    {
        this.name = n;
        this.age = age;
    }
    static sproperty = "Something";
    sayhi()
    {
        console.log("Hi, I am " + this.name);
    }

    static hello()
    {
        console.log(`Hello static method`);
    }
}

let person1 = new person("Sagar", 24);
person1.sayhi();
// person1.hello(); static method does not get called with 
//  instance of class it gets called with class name
person.hello();
// console.log(person.sproperty); you will have to access the 
//  the class property as well using the person or classname

console.log(person1);


//  hello or static function doesnt get into protoype it remains only to the class

