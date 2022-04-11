const Modelo = require("../framework/Modelo");


class Usuario extends Modelo {
    static arquivo = 'usuarios.json'

    nome = ''
    username = ''
    email = ''
    senha = ''
    biografia = ''
    endereco = ''
    cartaDeVinhos = ''

    static consultarEmailSenha(email, senha) {
        return this.listar().find(usuario => usuario.email && usuario.senha)
    }

}

module.exports = Usuario