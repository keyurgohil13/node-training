const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const todoRouter = require('./routes/todo');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', todoRouter);



app.listen(8000, () =>{
    console.log("Server run proper...on 8000 port.");
})

