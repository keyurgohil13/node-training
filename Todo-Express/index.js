const express = require("express");
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) => {
    // res.send("<h1>Helloo , Good Afternoon,,...</h1>");

    res.render('home');

})


app.post('/add', (req, res) =>{
    
    let data = req.body.todo;
    console.log("Data===>>0", data);
    res.send("Form Submit...");
})

app.get('/about', (req, res) =>{

    res.send("Welcome to about")
})


app.listen(8000, () =>{
    console.log("Server run proper...on 8000 port.");
})

