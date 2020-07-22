var name = 'Vinod';
var city = 'Bangalore';

// Template strings
var message = `Hello ${name}, how's weather in ${city}!`;
var msg = 'Hello ' + name + ', how\'s weather in ' + city + '!';

console.log(message);
console.log(msg);


const name = 'Vinod';
const email = 'vinod@vinod.co';
const website = 'https://vinod.co';

const msg1 = 'Name = ' + name + '\nEmail = ' + email + '\nWebsite = ' + website;
console.log(msg1);

const msg2 = `
------------------------------
Name      = ${name}
Email     = ${email}
Website   = ${website}
------------------------------
`;
console.log(msg2);