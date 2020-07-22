const Axios = require('axios');

const url = 'http://localhost:3000/customers';

const data = {
    "CUSTOMER_ID": "DONIV",
    "COMPANY_NAME": "KVinod Enterprises.",
    "CONTACT_NAME": "Vinod Kumar",
    "CONTACT_TITLE": "CEO",
    "ADDRESS": "Obere Str. 57",

    "POSTAL_CODE": "12209",
    "COUNTRY": "Germany",
    "PHONE": "030-0074321",
    "FAX": "030-0076545"
};

Axios.post(url, data)
    .then((resp) => {
        console.log(resp);
    })
    .catch(err => console.log(err.config.data));
