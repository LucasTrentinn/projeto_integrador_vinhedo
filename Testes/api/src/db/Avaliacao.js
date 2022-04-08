const Modelo = require("../framework/Modelo");

class Avaliacao extends Modelo {
    static file = 'avaliacoes.json'

    usuario = ''
    nota = 0
    comentario = ''
    foto = ''

}

module.exports = Avaliacao