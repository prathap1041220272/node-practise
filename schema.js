'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	// indexes
	name:String,
	age:Number,
	hi:String
});

module.exports = mongoose.model('user',userSchema);