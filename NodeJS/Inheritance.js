class emp {
    constructor(n)
    {
        this.name = n;
    }
    static greeting(){
        console.log(`this is using greetings `);
    }
}

class manager extends emp{
    constructor(n,d)
    {   super(n);
        this.department = d;
    }
}
let mg1 = new manager("Sagar", "Development");
manager.greeting();
console.log(mg1);