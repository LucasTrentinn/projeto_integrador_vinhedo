const Modelo = require("../framework/Modelo");

class Vinho extends Modelo {
    static file = 'vinhos.json'

    nome = ''
    safra = 0
    tipo = ''
    pais = ''
    uva = ''
    regiao = ''
    volume = ''
    harmonizacao = ''
    avaliacao = ''

}

module.exports = Vinho