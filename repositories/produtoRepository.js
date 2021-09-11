import { ProdutoModel } from '../models/produto'

class produtoRepository {

    async find(filter, callback) {

        try {

            if(filter) {
                const produto = await ProdutoModel.findOne(filter)
                return callback(produto)
            }

            const produtos = await ProdutoModel.find()
            return callback(produtos)

        } catch (err) {

            return callback(err)

        }

    }

    async findBy(filter, callback) {

        try {

            const produto = await ProdutoModel.findOne(filter)
            return callback(produto)

        } catch (err) {

            return callback(err)

        }

    }

    async create(data, res) {

        try {
            console.log(data)
            const produto = await ProdutoModel.create(data)
            console.log(produto)
            return res.send(201, { produto })

        } catch (err) {

            return res.send(500, err)

        }

    }

    async update(filter, update, callback) {

        try {

            const produto = await ProdutoModel.findOneAndUpdate(filter, update, {
                new: true
            });
            return callback(produto)

        } catch (err) {

            return callback(err)

        }

    }

    async delete(filter, res) {

        try {

            await ProdutoModel.findOneAndDelete(filter)
            return res.send('Removido com sucesso!')            

        } catch (err) {

            return res.send(500, err)

        }

    }

}

module.exports = new produtoRepository