const axios = require('axios');
const url = 'http://localhost:3000/customers';

const cust = {
    CUSTOMER_ID: 'SHMSN',
    COMPANY_NAME: 'Shyam Enterprises',
    CONTACT_NAME: 'Ramesh iyer',
    CONTACT_TITLE: 'Accounting Manager',
    ADDRESS: '23 Tsawassen Blvd.',
    CITY: 'Tsawassen',
    REGION: 'BC',
    POSTAL_CODE: 'T2F 8M4',
    COUNTRY: 'Canada',
    PHONE: '(604) 555-4729',
    FAX: '(604) 555-3745'
};

// HTTP POST request carries payload or request body (cust, in this example)
axios.post(url, cust)
    .then(() => console.log('Data added!'))
    .catch(console.log);