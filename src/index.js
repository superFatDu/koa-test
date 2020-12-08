// const Koa = require('koa')
import Koa from 'koa'
const path = require('path')
const app = new Koa()
const helmet = require('koa-helmet')
const statics = require('koa-static')

const router = require('./routes/routes')

app.use(helmet())
app.use(statics(path.join(__dirname, '../public')))
app.use(router())

app.listen(3000)