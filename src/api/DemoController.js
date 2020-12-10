class DemoController {
  constructor() { }
  demo (ctx) {
    ctx.body = {
      "message": "hello demo,MUTU"
    }
  }
}

export default new DemoController()