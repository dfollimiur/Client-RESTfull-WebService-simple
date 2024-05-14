// https://apidog.com/articles/call-rest-api-node-js/
//
// Per cancellare records settare il range degli id e chiamare lo script da console con node api-call.js

const http = require('http');

let start = 20;
let end = 30;

const delPersons = (id) => {
    const options = {
        hostname: 'danilofolli.alwaysdata.net',
        path: '/person/' + id,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      
  let data = '';

  const request = http.request(options, (response) => {
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      console.log(data);
    });
  });

  request.on('error', (error) => {
    console.error(error);
  });

  request.end();
};

for(i=start; i<end; i++) {
    delPersons(i);
}