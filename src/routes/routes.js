import combineRoutes from 'koa-combine-routers'

import demoRouter from './demoRouter'
console.log(demoRouter)
// module.exports = combineRoutes(aroutes, broutes)

export default combineRoutes(demoRouter)