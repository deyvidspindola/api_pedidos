const restify = require('restify')
const consign = require('consign')

export const server = restify.createServer()

server.use(restify.plugins.queryParser({
    mapParams: false,
    allowDots: true
}))

server.use(restify.plugins.bodyParser({
    mapParams: false
}))

consign()
    .include('controllers')
    .into(server)

server.start = onStart => {
    server.listen(process.env.SERVER_PORT, '0.0.0.0', onStart)
    return server
}