const httpModule = require('http')
const handleRoutingForMyServer = require('./handleRoutes')


const server = httpModule.createServer(handleRoutingForMyServer)

server.listen(3000)