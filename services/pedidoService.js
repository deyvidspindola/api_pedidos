const pedidoRepository = require('../repositories/pedidoRepository')
const produtoRepository = require('../repositories/produtoRepository')

class pedidoService {

    async all(res) {
        
        pedidoRepository.all(res)
    
    }

    async create(data, res) {

        this.checkStock(data, (response) => {

            if(!response)
                res.send('Não tem estoque')
                
            this.updateStock(data)

            pedidoRepository.create(data, res)

        })

    }

    async update(find, findName, update, res) {

        const filter = this.filter(find, findName)
        pedidoRepository.update(filter, update, res)

    }

    async delete(find, findName, res) {

        const filter = this.filter(find, findName)
        pedidoRepository.delete(filter, res)

    }

    filter(find, findName) {
        return { [findName] : find }
    }

    checkStock(data, callback) {

        produtoRepository.findBy({ nome: data.produtos.nome }, (produto) => {

            if (produto.quantidade < data.produtos.quantidade) {
                return callback(false)
            }

            return callback(true)

        })

    }

    updateStock(data) {

        produtoRepository.find({ nome: data.produtos.nome }, (produto) => {

            const quantidade = parseInt(produto.quantidade) - parseInt(data.produtos.quantidade)
            const filter = this.filter(produto._id, '_id')
            
            produtoRepository.update(filter, {'quantidade': quantidade}, (response) => {
                console.log(response)
            })

        })

    } 

}

module.exports = new pedidoService