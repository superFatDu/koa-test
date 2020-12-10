import Koa from 'koa'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'

const app = new Koa()

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