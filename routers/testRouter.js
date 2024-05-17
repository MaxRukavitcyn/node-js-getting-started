const express = require('express');
const path = require("path");
const testRouter = express.Router()


testRouter.get('/hello_world', function(req, res) {
	res.send('hello world');
});

testRouter.get('/textFileTest',(request, response) => {
	response.sendFile(path.resolve('public/textFileTest.html'))
});

testRouter.get('/forEkaterina',(request, response) => {
	response.sendFile(path.resolve('public/forEkaterina.html'))
});

module.exports = testRouter;
