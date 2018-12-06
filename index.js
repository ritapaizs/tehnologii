const express = require('express');
const request = require('request');
const server = express();
const port = 3000;
server.use(express.static('folder'));
server.get('/ola', function(request, response) {

 response.sendfile('./hello.html');
});

var fs = require('fs');
 
fs.readFile('test.txt', 'utf8', function(err, contents) {
    console.log(contents);

});
 server.get('/file',function(req, res){
	fs.readFile('test.txt', 'utf8', function(err, contents) {
	    console.log(contents);
	    res.send(contents);
	 });
 });

 server.get('/otherAPI',function(req, responds){
	request('https://jsonplaceholder.typicode.com/todos/', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	  console.log(body.url);
	  console.log(body.explanation);
	  responds.send(body);
	});
	
});

console.log('after calling readFile');
server.listen(port, () => console.log(`Example app
 listening on port ${port}!	`));
