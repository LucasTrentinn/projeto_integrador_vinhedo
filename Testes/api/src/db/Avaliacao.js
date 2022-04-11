const Modelo = require("../framework/Modelo");

class Avaliacao extends Modelo {
    static arquivo = 'avaliacoes.json'

    usuario = ''
    nota = 0
    comentario = ''
    foto = ''

}

module.exports = Avaliacao