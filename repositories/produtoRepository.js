import { ProdutoModel } from '../models/produto'

class produtoRepository {

    async list(res) {

        try {

            const produtos = await ProdutoModel.find()
            return res.send({ produtos })

        } catch (err) {

            return res.send(500, err)

        }

    }

    async create(data, res) {

        try {

            const produto = await ProdutoModel.create(data)
            return res.send({ produto })

        } catch (err) {

            return res.send(500, err)

        }

    }

    async update(data, id, res) {

        try {

            const produto = await ProdutoModel.findById(id)

        } catch (err) {

            return res.send(500, err)

        }

    }

    async delete(id, res) {

        try {

            

        } catch (err) {

            return res.send(500, err)

        }

    }

}

module.exports = new produtoRepository