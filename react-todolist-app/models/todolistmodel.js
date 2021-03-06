var mongoose = require('../models/db');
var Schema = mongoose.Schema;

var todolistSchema = new Schema({
    context: String,
    id: {
        type:String,
        unique:true
    },
    owns: String,
    deadline: Date,
    editedtime: Date,
    completed: Boolean,
    importance: Boolean
})

module.exports = mongoose.model('todolist',todolistSchema);