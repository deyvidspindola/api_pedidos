const produtoService = require('../services/produtoService')

module.exports = server => {

    server.get('/produtos/:filter', async (req, res) => {

        try{

            const filter = (req.params.filter) ? req.params.filter : null
            const products = await produtoService.all(filter)
            res.send(products)
        
        } catch(err){
            
            res.send(500, err.message)
        
        }

    })

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