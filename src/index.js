const fetch = require('node-fetch');

fetch('https://www.google.com')
    .then(res => res.text())
    .then(text => console.log('RESPONSE', text))