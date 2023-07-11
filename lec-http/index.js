const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) =>{

    // fs.writeFileSync('demo.txt', "Create demo txt file....");

    // fs.appendFileSync('demo.txt', "Good Afternoon");


    // let data = fs.readFileSync('demo.txt');
    // console.log(data.toString());

    res.end("Craete.....");

})


server.listen(8000, "localhost", () =>{

    console.log(`Server is runnig on http://localhost:8000 port...`);
})