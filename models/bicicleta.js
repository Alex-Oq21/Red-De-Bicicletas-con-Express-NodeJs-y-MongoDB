var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var biciclteaSchema = new Schema({
    code: Number,
    color: String,
    modelo: String,
    ubicacion:{
        type: [Number], index:{ type:'2dsphere', sparse: true}
    }
});

biciclteaSchema.statics.createInstance = function(code, color, modelo, ubicacion){
    return new this({
        code: code,
        color: color,
        modelo: modelo,
        ubicacion: ubicacion
    });
};

biciclteaSchema.methods.toString = function(){
    return 'code: ' +this.code+ ' color: ' + this.color;
};

biciclteaSchema.statics.allBicis = function(cb){
    return this.find({}, cb);
}
module.exports = mongoose.model('Bicicleta', biciclteaSchema);

