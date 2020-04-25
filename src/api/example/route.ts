import Router = require('koa-router')
import { create, read, update, remove } from './controller'

const router = new Router()

router.get('/', (ctx) => {
  ctx.body = {
    message: read()
  }
  ctx.res.statusCode = 200
})

router.post('/', (ctx) => {
  ctx.body = {
    status: 'success',
    message: create(),
    response: ctx.request.body,
  }
  ctx.res.statusCode = 200
})

router.put('/', (ctx) => {
  ctx.body = {
    status: 'success',
    message: update(),
    response: ctx.request.body,
  }
  ctx.res.statusCode = 200
})

router.delete('/', (ctx) => {
  ctx.body = {
    status: 'success',
    message: remove(),
    response: ctx.request.body,
  }
  ctx.res.statusCode = 200
})

export default router.routes()