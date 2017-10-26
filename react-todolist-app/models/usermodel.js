var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var usersSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    password:String,
    lastsignintime:Date
})