import { ProdutoModel } from '../models/produto'
import { PedidoModel } from '../models/pedido'
import { reload } from 'pm2'

class pedidoRepository {
    
    async list(res) {

        try{

            const pedidos = await PedidoModel.find()
            return res.send({ pedidos })

        } catch (err) {
            return res.send(500, err)
        }

    }

    async create(data, res) {

        try {

            if(!this.checkStock(data)){
                return res.send(401, 'Quantidade solicitada indisponivel')
            }

            const produto = await PedidoModel.create(data)
            return res.send({ produto })

        } catch (err) {

            return res.send(500, err)

        }

    }

    async checkStock(data) {

        const produto = await ProdutoModel.findOne({ nome: data.produtos.nome })
        if (produto.estoque <= data.produtos.quantidade) {
            return false
        }
        return true

    }

    async updateStock(data) {

        try {

            

        }  catch (err) {

            return err

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

/*
    async criarPedido(pedido) {

        if (!this.validaEstoque(pedido))
            return "Quantidade indisponivel"
        
        // this.baixarEstoque(pedido.produto)

        //const pedido = await PedidoModel.create(req.body)
        //return pedido



    }

    validaEstoque(produto) {

        try {

            const estoque = 8
            if (estoque <= pedido.produto.quantidade)
                return false
            
            return true

        } catch (err) {



        }

    }

    baixarEstoque(produto) {

        try {



        } catch (err) {



        }

    }*/

}
module.exports = new pedidoRepository; 