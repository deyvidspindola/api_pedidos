import { ProdutoModel } from '../models/produto'

module.exports = server => {

    server.get('/produtos', async (req, res) => {

        try{

            const produtos = await ProdutoModel.find()
            return res.send({ produtos })

        } catch (err) {
            return res.send(500, err)
        }

    })

    server.post('/produtos', async (req, res) => {

        try{

            //const produto = req.body
            const produto = await ProdutoModel.create(req.body)
            return res.send({ produto })

        } catch (err) {
            return res.send(500, err)
        }

    })

}