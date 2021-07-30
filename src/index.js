const express = require('express')
const app = express()


const v1 = require('./routes/apiRoute')

app.listen(3000, ()=> console.log('listening on http://localhost:3000/v1'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/v1', v1)
