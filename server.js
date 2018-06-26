const Koa = require('koa2')

const app = new Koa()

app.use(async ctx => {
  console.log(ctx)
  if (~ctx.request.url.indexOf('test')) {
    ctx.body = 'Hello test'
    return
  }
  ctx.body = JSON.stringify({success: true, data: {name: '测试'}})
})

app.listen(3000)
