const mongoose = require('mongoose')

const ProdutoSchema = new mongoose.Schema({

  nome: {
    type: String,
    required: true,
    unique: true
  },
  quantidade: {
    type: Number,
    required: true,
    min: 0
  }

},
{
  timestamps: true,
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
});

export const ProdutoModel = mongoose.model('produtos', ProdutoSchema)