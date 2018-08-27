'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 2001;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/data',(req,res)=>{
	const {name,email} = req.body;
	res.send(req.body)
	console.log(req.body)
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});