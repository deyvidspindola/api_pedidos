const produtoRepository = require('../repositories/produtoRepository')

class produtoService {

    async all(res) {
        
        produtoRepository.find(null, (response) => {
            res.send({response})
        })
  
    }

    async create(data, res) {

        produtoRepository.create(data, res)

    }

    async update(find, findName, update, res) {

        const filter = this.filter(find, findName)
        produtoRepository.update(filter, update, (response) => {
            res.send(response)
        })

    }

    async delete(find, findName, res) {

        const filter = this.filter(find, findName)
        produtoRepository.delete(filter, res)

    }

    filter(find, findName) {
        return { [findName] : find }
    }
}

module.exports = new produtoService