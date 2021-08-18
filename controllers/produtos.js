const produtoRepository = require('../repositories/produtoRepository')

module.exports = server => {

    server.get('/produtos', async (req, res) => {

        produtoRepository.list(res)

    })

    server.post('/produtos', async (req, res) => {

        const produto = req.body
        produtoRepository.create(produto, res)

    })

}