const Router = require('koa-router')
const { a } = require('../api/DemoController.js')

const router = new Router()

router.get('/demo', a)

export default router