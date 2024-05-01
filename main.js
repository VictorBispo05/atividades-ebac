function Celular(marca, modelo, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
}

Celular.prototype.ligar = function() {
    throw new Error('O método fazerSom deve ser implementado nas subclasses');
}

function Motorola(marca, modelo, cor) {
    Celular.call(this, marca, modelo, cor);
}

function Samsung(marca, modelo, cor) {
    Celular.call(this, marca, modelo, cor);
}

const Celular1 = new Motorola("Motorola", "G84", "Grafite");
const Celular2 = new Samsung("Samsung", "M53", "Marrom");
const Celular3 = new Samsung("Samsung", "S23", "Grafite");

console.log(`O ${Celular1.modelo} é da cor ${Celular1.cor} e é fabricado pela ${Celular1.marca}.`);
console.log(`O ${Celular2.modelo} é da cor ${Celular2.cor} e é fabricado pela ${Celular2.marca}.`);
console.log(`O ${Celular3.modelo} é da cor ${Celular3.cor} e é fabricado pela ${Celular3.marca}.`);