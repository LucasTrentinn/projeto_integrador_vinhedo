const Modelo = require("../framework/Modelo");

class Endereco extends Modelo {
    static arquivo = 'enderecos.json'

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