const mongoose = require('mongoose')

const ProdutoSchema = new mongoose.Schema({

    nome: String,
    quantidade: Number

},
{
  timestamps: true,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
});

export const ProdutoModel = mongoose.model('produtos', ProdutoSchema)