// module.exports = function (ctx) {
//   ctx.body = 'hello a'
// }

const a = ctx => {
  ctx.body = {
    "message": "hello a!"
  }
}

module.exports = { a }

// class DemoController {
//   constructor() { }
//   demo (ctx) {
//     ctx.body = {
//       "message": "hello demo"
//     }
//   }
// }

// export default new DemoController()