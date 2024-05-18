require('dotenv').config();
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const testRouter = require('./routers/testRouter');
const testDataBase = require('./routers/testDataBase');
const uploadAnyFiles = require('./routers/uploadAnyFiles')

const app = express();
app
	.use(express.static(path.join(__dirname, 'public')))
	.use(express.json())
	.use('/test', testRouter)
	.use('/test/db', testDataBase)
	.use('/upload', uploadAnyFiles)
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))


