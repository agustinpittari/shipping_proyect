const express = require('express')

const v1 = require('./routes/apiRoute')

const app = express()

app.listen(3000, ()=> console.log('listening on http://localhost:3000/v1'))

app.use('/v1', v1)
