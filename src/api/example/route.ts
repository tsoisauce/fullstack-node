import Router = require('koa-router')

const router = new Router()

router.get('/', ctx => {
  ctx.body = {
    message: "Hello Example API!"
  }
  ctx.res.statusCode = 200
})

export default router.routes()