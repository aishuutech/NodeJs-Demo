const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const auditschema = new Schema({
    userName : {type  :String,required : true},
    login: { type: Date, required: true },
    clientIp: { type: JSON, required: false },
    logout: { type: Date,required : false,default : null }
});

auditschema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Audit', auditschema);