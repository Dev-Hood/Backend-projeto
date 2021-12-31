const express = require('express');
const app = express()
const routes = require('./routes')
require('./database')
app.use(express.static(__dirname+'/public'))
app.use(express.static(__dirname+'/dashboard'))
app.use(express.json())
app.use(routes)
app.listen(3333);