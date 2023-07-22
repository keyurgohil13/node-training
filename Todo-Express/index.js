const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const todoRouter = require('./routes/todo');
const mongoose = require('./db/config');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', todoRouter);




mongoose;
app.listen(8000, () =>{
    console.log("Server run proper...on 8000 port.");
})

