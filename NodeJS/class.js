class person {
    constructor(n, age)
    {
        this.name = n;
        this.age = age;
    }
    sayhi()
    {
        console.log("Hi, I am " + this.name);
    }
}

let person1 = new person("Sagar", 24);
person1.sayhi();
console.log(person1);