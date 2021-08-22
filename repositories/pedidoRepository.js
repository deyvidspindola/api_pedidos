import { PedidoModel } from '../models/pedido'

class pedidoRepository {

    async all(res) {

        try {

            const pedidos = await PedidoModel.find()
            return res.send({ pedidos })

        } catch (err) {

            return res.send(500, err)

        }

    }

    async create(data, res) {

        try {

            const pedido = await PedidoModel.create(data)
            return res.send(201, { pedido })

        } catch (err) {

            return res.send(500, err)

        }

    }

    async update(filter, update, res) {

        try {

            const pedido = await PedidoModel.findOneAndUpdate(filter, update, {
                new: true
            });
            return res.send({ pedido })

        } catch (err) {

            return res.send(500, err)

        }

    }

    async delete(filter, res) {

        try {

            await PedidoModel.findOneAndDelete(filter)
            return res.send('Removido com sucesso!')            

        } catch (err) {

            return res.send(500, err)

        }

    }

}

module.exports = new pedidoRepository