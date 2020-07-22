const axios = require('axios');
const url = 'http://localhost:3000/customers/SHMSN';

axios.get(url) // returns a 'Promise' object; has always 2 outcomes -> resolved, rejected
    .then(resp => resp.data) // input parameter --> resp, return value is resp.data
    .then(data => console.log(data))
    // .then(console.log)
    .catch(err => console.log(err));

console.log('End of script');