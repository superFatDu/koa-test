// module.exports = function (ctx) {
//   ctx.body = 'hello a'
// }

const a = ctx => {
  ctx.body = {
    "message": "hello a!"
  }
}

module.exports = { a }