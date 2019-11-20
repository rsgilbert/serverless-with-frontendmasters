const express = require('express')
const http = require('serverless-http')
const router = require('./router')

// express app will be used for all routes
const app = express()
app.use(router)

module.exports.handler = http(app)