import Router = require('koa-router')
import exampleApi from '../api/example/route'

const router = new Router()

router.get('/', ctx => {
  ctx.body = "Hello World!"
  ctx.res.statusCode = 200
})

router.use('/api/example', exampleApi)

export default router