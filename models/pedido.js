const mongoose = require('mongoose')

const PedidoSchema = new mongoose.Schema({

    numero_pedido: {
        type: Number,
        required: true,
        unique: true,
        min: 1
    },
    cliente: [{
        usuario: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }],
    produtos: [{
        produto_id: {
            type: String,
            required: true,

        },
        nome: {
            type: String,
            required: true
        },
        quantidade: {
            type: Number,
            required: true,
            min: 1
        }
    }]

},
{
  timestamps: true,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
});

export const PedidoModel = mongoose.model('pedidos', PedidoSchema)