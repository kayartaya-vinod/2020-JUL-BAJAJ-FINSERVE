const axios = require('axios');

const url = 'http://localhost:3000/customers?limit=100';

axios.get(url)
    .then(resp => resp.data)
    .then(console.log)
    .catch(console.log);

