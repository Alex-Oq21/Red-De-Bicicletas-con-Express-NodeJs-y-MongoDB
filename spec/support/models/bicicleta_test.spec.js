var Bicicleta = require('../../models/bicicleta');

beforeEach(() => {Bicicleta.allBicis = [];});
describe('Bicicleta.allBicis', () =>{
    it('inicia vacia', () =>{
        expect(bicicleta.allBicis.length).toBe(0);
    });
});

describe('Bicicleta.add', () =>{
    it('Agregar Bicicleta', () =>{
     expect(bicicleta.allBicis.length).toBe(0);
     var a = new Bicicleta(1, 'rojo', 'urbana', [-34.6012424, -58.3861497]);
        Bicicleta.add(a);
        expect(bicicleta.allBicis.length).toBe(1);
        expect(bicicleta.allBicis[0]).toBe(a);

    });
});

describe('Bicicleta.finById', () => {
    it('debe retornar una bicicleta con id 1', () =>{
        expect(bicicleta.allBicis.length).toBe(0);
        var a = new Bicicleta(1, 'rojo', 'urbana');
        var a = new Bicicleta(2, 'azul', 'montaña');
        Bicicleta.add(1);
        Bicicleta.add(2);

        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici.color);
        expect(targetBici.modelo).toBe(aBici.modelo);
    });
});