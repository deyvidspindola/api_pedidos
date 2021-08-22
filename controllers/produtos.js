const produtoService = require('../services/produtoService')

module.exports = server => {

    server.get('/produtos', async (req, res) => produtoService.all(res))

    server.post('/produtos', async (req, res) => {

        const produto = req.body
        produtoService.create(produto, res)

    })

    server.put('/produtos/:id', async (req, res) => {

        const find = req.params.id
        const data = req.body
        produtoService.update(find, '_id',  data, res)

    })

    server.del('/produtos/:id', async (req, res) => {

        const find = req.params.id
        produtoService.delete(find, '_id', res)

    })

}