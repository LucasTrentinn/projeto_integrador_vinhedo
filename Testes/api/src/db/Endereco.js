const Modelo = require("../framework/Modelo");

class Endereco extends Modelo {
    static file = 'enderecos.json'

    cep = ''
    logradouro = ''
    pais = ''
    estado = ''
    cidade = ''
    bairro = ''
    numero = ''
    complemento = ''

}

module.exports = Endereco