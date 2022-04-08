const fs = require('fs')
const { join } = require('path')

class Modelo {
    static dir
    static file = ''

    constructor() {
    }

    id = 0
    dateSubmit = new Date()
    dateAtt = new Date()

    static get filePath() {
        return join(this.dir, this.file)
    }

    assign(obj={}) {
        Object.assign(this, obj)
        return this
    }

    static list() {
        try {
            const data = fs.existsSync(this.filePath) ?
                fs.readFileSync(this.filePath) : ''

            return JSON.parse(data).map(obj => new this().assign(obj))
        }
        catch(err) {
            return []
        }
    }

    static check(id) {
        let data = this.list().filter((obj) => obj.id == id)

        if(data.length == 0) {
            throw new Error("Objeto não encontrado.")
        }

        const obj = new this()
        obj.assign(data[0])

        return obj
    }

    save() {
        let data = this.constructor.list()

        if(this.id == 0) {
            this.id = data.length > 0 ? data[data.length - 1].id + 1 : 1
            data.push(this)
        } else {
            let idx = data.findIndex((obj) => obj.id == this.id)

            if(idx == -1)
                throw new Error("Objeto não encontrado.")
            
            data[idx] = this
        }

        fs.writeFileSync(this.constructor.filePath, JSON.stringify(data, null, '\t'))
    }

    delete() {
        let data = this.constructor.list()
        let idx = data.findIndex((obj) => obj.id == this.id)

        if(idx == -1)
            throw new Error("Objeto não encontrado.")

        data.splice(idx, 1)

        fs.writeFileSync(this.constructor.filePath, JSON.stringify(data, null, '\t'))
    }
}

module.exports = Modelo