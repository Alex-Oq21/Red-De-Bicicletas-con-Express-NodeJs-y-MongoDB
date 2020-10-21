var Bicicleta = function(id, modelo, color, ubicacion){
    this.id = id;
    this.modelo = modelo;
    this.color = color;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function(){
    return 'id: ' + this.id + " color: " + this.color;
}
Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici); 
}
    var a = new Bicicleta(1, 'rojo', 'urbana', [-34.6012424, -58.3861497]);
    var b = new Bicicleta(2, "Amaraillo", 'urbana', [-34.5012424, -58.7861497])
    Bicicleta.add(a);
    Bicicleta.add(b);
module.exports = Bicicleta;