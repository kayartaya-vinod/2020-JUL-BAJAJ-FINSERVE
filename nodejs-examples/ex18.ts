class Product {
    // data members/ feilds/ state/ properties/ attributes
    private id: number;
    private name: string;
    private description: string;
    private unitPrice: number;
}

// let p1 = new Product();
// console.log(p1);

class Person {

    // adding 'private' to constructor parameters makes them automatically as
    // member variables. You can also use 'public', 'protected'
    constructor(
        private name: string = undefined,
        private email: string = undefined,
        private city: string = 'Bangalore') {
    }

    print() {
        // member functions (methods) have access to member data using 'this' reference
        setTimeout(() => {
            console.log('Name  = %s', this.name);
            console.log('Email = %s', this.email);
            console.log('City  = %s', this.city);
            console.log();
        }, 10000);
    }
}

let p2 = new Person('Vinod', 'vinod@vinod.co'); // creates a new object and calls the Person constructor
// console.log(p2);
p2.print();
console.log('End of script!');
