import mongoose from "mongoose"

const PedidoSchema = new mongoose.Schema({

    numero_pedido: Number,
    cliente: [{
        usuario: String,
        email: String
    }],
    produtos: [{
        nome: String,
        quantidade: Number
    }]

},
{
  timestamps: true,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
});

export const PedidoModel = mongoose.model('pedidos', PedidoSchema)