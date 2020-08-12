// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('../public/mock/article.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
