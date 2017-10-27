var mongoose = require('../models/db');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    password:String,
    lastsignintime:Date
})

module.exports = mongoose.model('users',usersSchema);