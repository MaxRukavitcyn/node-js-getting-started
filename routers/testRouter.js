const express = require('express');
const testRouter = express.Router()


testRouter.get('/hello_world', function(req, res) {
	res.send('hello world');
});

module.exports = testRouter;
