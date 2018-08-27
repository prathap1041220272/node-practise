'use strict';
const express = require('express');
const app = express();
const port = 3000;
const {connection} = require('./models');

app.listen(port,()=>{
	console.log(`server started at port ${port}`)
})