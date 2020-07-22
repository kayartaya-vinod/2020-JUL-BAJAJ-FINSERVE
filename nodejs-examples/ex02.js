// Here we shall discuss about variables and declarations
/*
    Name: Vinod
    Email: vinod@vinod.co
    Website: https://vinod.co
*/

myName = 'Vinod';
var myEmail = 'vinod@vinod.co';
var myHomeAddress; // value is 'undefined'
// let myWebsite = 'https://viond.co/';
const myPhone = '9731424784';

// var --> local to the function
// let --> local to the block of {}

// prefer to use const over let, and let over var
function showVars() {
    console.log('myName', myName);
    console.log('myEmail', myEmail);
    
    // different variable than the one in the global scope which is const
    let myPhone = '9844083934';
    console.log('myPhone', myPhone);

    if (10 > 4) {
        console.log('myWebsite', myWebsite);
        let myWebsite = 'http://kvinod.com/';
    }
}
function showWebsite() {
    console.log('myWebsite', myWebsite);
}

showVars();
// showWebsite();