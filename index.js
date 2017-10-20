const https = require('https');
 
https.get('https://demo6927372.mockable.io/northbus', (resp) => {
  let data = '';
 
  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).northDirectionAvailableBus);
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
