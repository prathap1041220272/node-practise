'use strict';

const http = require('http');

http.createServer((req,res)=>{
	res.write('this is the response from the server \n');
	res.end('response end\'s here!')
}).listen(2000,()=>{
	console.log('server started')
})