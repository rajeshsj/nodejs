const https = require('https');
 
 
 exports.findBus = (req, res) => {
    const assistant = new Assistant({ request: req, response: res });

    function responseHandler(assistant) {
        var busNumber = assistant.getArgument('busnumber');
        var busDirection = assistant.getArgument('direction').toLowerCase();

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
 }
	}
