// old traditional way of creating a class
// is by creating a function

// not a class, but a constructor
function Person() {
    this.name = undefined;
    this.email = undefined;
    this.city = 'Bangalore';
}

Person.prototype.print = function() {
    console.log('Name    = ' + this.name);
    console.log('Email   = ' + this.email);
    console.log('City    = ' + this.city);
}

let p1 = new Person();
console.log(p1);
p1.print();