const Modelo = require("../framework/Modelo");


class Usuario extends Modelo {
    static file = 'usuarios.json'

    nome = ''
    username = ''
    email = ''
    senha = ''
    biografia = ''
    endereco = ''
    cartaDeVinhos = ''

}

module.exports = Usuario