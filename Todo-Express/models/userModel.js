const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    Email: String,
    password : String

})


const User = mongoose.model('users', userSchema);

module.exports = User;