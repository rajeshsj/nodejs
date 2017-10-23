// const https = require('https');
 
 
//  exports.findBus = (req, res) => {
//     const assistant = new Assistant({ request: req, response: res });

//     function responseHandler(assistant) {
//         var busNumber = assistant.getArgument('busnumber');
//         var busDirection = assistant.getArgument('direction').toLowerCase();

//      https.get('https://demo6927372.mockable.io/northbus', (resp) => {
//   let data = '';
 
//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });
 
//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).northDirectionAvailableBus);
//   });
 
// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });
//  }
// 	}
// });
const https = require('https');
exports.dialogflowFirebaseFulfillment = function dialogflowFirebaseFulfillment (req, res) {
  //response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working
https.get('https://demo6927372.mockable.io/northbus', (res) => {
	let data = '';
   res.on('data', (chunk) => {
     data += chunk;
   });});
  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": response, "displayText": response 
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
};

