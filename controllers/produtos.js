const produtoService = require('../services/produtoService')

module.exports = server => {

    server.get('/produtos/:search', async (req, res) => {

        try {

            const search = (req.params.search) ? req.params.search : null
            const products = await produtoService.get(search)
            res.send(products)
        
        } catch(err) {
            
            res.send(500, err.message)
        
        }

    })

    server.post('/produto', async (req, res) => {

        try {

            const data = req.body
            const produto = await produtoService.create(data)
            res.send(201, produto)

        } catch (err) {

            res.send(500, err.message)
       
        }

    })

    server.put('/produto/:productId', async (req, res) => {

        try {

            const productId = req.params.productId
            const data = req.body
            const product = await produtoService.update(productId, data)
            res.send(product)

        } catch (err) {

            res.send(500, err.message)

        }

    })

    server.del('/produto/:productId', async (req, res) => {

        try {

            const productId = req.params.productId
            await produtoService.destroy(productId)
            res.send('Produto removido com sucesso!')

        } catch (err) {

            res.send(500, err.message)

        }

    })

}