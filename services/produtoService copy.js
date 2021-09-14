const produtoRepository = require('../repositories/produtoRepository')

class produtoService {

    async all(res) {
        
        try {
            const product = await produtoRepository.find(null)
            return all(product)
        } catch (err) {
            throw new Error(err)
        }
        /*
        produtoRepository.find(null)
            .then(res, (produtcs) => res.send({produtcs}))
            .catch((err) => { throw new Error(err) })

        produtoRepository.find(null, (response) => {
            res.send({response})
        })
  */
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