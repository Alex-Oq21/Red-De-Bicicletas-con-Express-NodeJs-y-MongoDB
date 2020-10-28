var mongoose = require('mongoose');
var Reserva = require('./reserva');
var Schema = mongoose.Schema;
const mailer = require('../mailer/mailer');
const { schema } = require('./bicicleta');

var usuarioSchema = new schema({
    nombre:String,
});

usuarioSchema.methods.reservar = function (biciId, desde, hasta, cb){
      var reserva = new Reserva({usuario: this._id,bicicleta: biciId, desde: desde, hasta: hasta});
      console.log(reserva);
}
module.exports = mongoose.model('Usuario', usuarioSchema);
