const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const testRouter = require('./routers/testRouter');

const app = express();
app
	.use(express.static(path.join(__dirname, 'public')))
	.use('/test', testRouter)
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))


