const path = require('path')
const config = require('./config')
const jsonServer = require('json-server')
const rules = require('./routes');
const dbfile = require(config.dbFile)

const ip = config.serverUrl
const port = config.port
const db_file = config.dbFile

const server = jsonServer.create()
//根据db.json文件自动生成路由规则
const router = jsonServer.router(dbfile())
//中间件
const middlewares = jsonServer.defaults()
// server.use(jsonServer.bodyParser)
server.use(middlewares)
//设置增加一个响应头信息“从server到前端”
server.use((req, res, next) => {
  res.header('X-Hello', 'World')
  next();
})
//数据发送到前端之前包一层
router.render = (req, res) => {
  res.jsonp({
    code: 200, data: res.locals.data //res.locals.data这个是真正的数据
  })
}
//模拟api接口，就是访问api的时候给制定路由规则
server.use("/", router)
server.use(jsonServer.rewriter(rules))
server.use(router)

server.listen({
  host: ip,
  port: port
}, function() {
  console.log(JSON.stringify(jsonServer));
  // console.log(`JSON Server is running in http://${ip}:${port}`)
})
