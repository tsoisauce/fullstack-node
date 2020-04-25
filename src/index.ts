import Koa = require('koa')
import Router = require('koa-router')
import bodyParser = require('koa-bodyparser')
import logger = require('koa-logger')
import json = require('koa-json')
import responseTime = require('koa-response-time')
import dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT || 3000
const server = new Koa()
const router = new Router()

router.get('/', ctx => {
  ctx.body = "Hello World!"
  ctx.res.statusCode = 200
})

server.use(bodyParser())
server.use(logger())
server.use(json())
server.use(responseTime())
server.use(router.routes())
server.use(router.allowedMethods())

server.listen(port, () => {
  console.log(`>>>>> Ready on http://localhost:${port}`)
})