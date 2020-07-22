class Person {
    constructor(name = undefined, email=undefined, city = 'Bangalore') {
        // console.log('this is', this);
        this.name = name;
        // console.log('this is', this);
        this.email = email;
        // console.log('this is', this);
        this.city = city;
        // console.log('this is', this);
    }

    print() {
        console.log('Name    = ' + this.name);
        console.log('Email   = ' + this.email);
        console.log('City    = ' + this.city);    
        console.log('------------------------------------------------')
    }
}

let p1 = new Person();
// let p2 = new Person('Shyam');
// let p3 = new Person('Kiran', 'kiran@example.com');
// let p4 = new Person('Vinod', 'vinod@vinod.co', 'Bengaluru');
p1 = new Person('Vinod', 'vinod@vinod.co', 'Bengaluru');

p1.name = 'Vinod';
p1.print();
// p2.print();
// p3.print();
// p4.print();