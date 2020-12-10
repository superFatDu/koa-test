// const Koa = require('koa')
import Koa from 'koa'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
const path = require('path')
const helmet = require('koa-helmet')
const statics = require('koa-static')

const app = new Koa()

const router = require('./routes/routes')

// app.use(helmet())
// app.use(statics(path.join(__dirname, '../public')))

const middleWare = compose([
  koaBody(),
  statics(path.join(__dirname, 'public')),
  cors(),
  jsonutil({ pretty: false, param: 'pretty' }),
  helmet()
])
app.use(middleWare)
app.use(router())

app.listen(3000)