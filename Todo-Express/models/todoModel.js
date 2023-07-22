const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task : {
        type : String,
        required : true
    }
}, {
    versionKey : false
})

const Todo = mongoose.model('ytodos', TodoSchema);

module.exports = Todo;