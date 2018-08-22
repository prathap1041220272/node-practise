'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test')
.then(()=>{
	console.log('connected to db')
})
.catch((err)=>{
	console.log(err.message)
})

module.exports = mongoose