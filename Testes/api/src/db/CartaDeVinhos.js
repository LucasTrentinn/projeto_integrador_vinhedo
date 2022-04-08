const Modelo = require("../framework/Modelo");

class CartaDeVinhos extends Modelo {
    static file = 'cartasDeVinhos.json'

    vinho = ''
    nota = 0

}

module.exports = CartaDeVinhos