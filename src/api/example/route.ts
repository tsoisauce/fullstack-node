import Router = require('koa-router')
import { create, read, update, remove } from './controller'

const router = new Router()

router.get('/', (ctx) => {
  ctx.body = read()
  ctx.res.statusCode = 200
})

router.post('/', (ctx) => {
  const payload = ctx.request.body
  ctx.body = create(payload)
  ctx.res.statusCode = 200
})

router.put('/:id', (ctx) => {
  const updateUserId = parseInt(ctx.params.id)
  const payload = ctx.request.body
  ctx.body = update(updateUserId, payload)
  ctx.res.statusCode = 200
})

router.delete('/:id', (ctx) => {
  const deleteUserId = parseInt(ctx.params.id)
  ctx.body = remove(deleteUserId)
  ctx.res.statusCode = 200
})

export default router.routes()