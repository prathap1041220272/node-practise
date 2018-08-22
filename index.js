'use strict';
//importing the modules or packages
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

//importing local modules
const db = require('./connection.js');
const user = require('./schema.js');

//parsing the data with middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//routes
app.post('/sign',(req,res)=>{
	const {name,age,hi} = req.body;
	const use = new user({name,age,hi});
	use.save()
	.then((data)=>{
		res.send(data)
	})
	.catch((err)=>{
		res.send(err.message)
	})
})

app.get('/display',(req,res)=>{
	user.find()
	.then((data)=>{
		res.send(data)
	})
	.catch((err)=>{
		res.send(err.message)
	})
})

app.put('/edit',(req,res)=>{
	const {name,age,hi} = req.body;
	user.findOneAndUpdate({name:name},{age,hi},{new:true})
	.then((data)=>{
		res.send(data)
	})
	.catch((err)=>{
		res.send(err.message)
	})
})
app.delete('/delete',(req,res)=>{
	const {name} =req.body;
	user.findOneAndDelete()
	.then(data=>{
		res.send(data)
	})
	.catch(err=>{
		res.send(err.message)
	})
})

//server listening here
app.listen(port,()=>{
	console.log(`server started at ${port}`)
})