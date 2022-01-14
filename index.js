require('dotenv').config();
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const testRouter = require('./routers/testRouter');
const testDataBase = require('./routers/testDataBase')

const app = express();
app
	.use(express.static(path.join(__dirname, 'public')))
	.use('/test', testRouter)
	.use('/test/db', testDataBase)
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))


