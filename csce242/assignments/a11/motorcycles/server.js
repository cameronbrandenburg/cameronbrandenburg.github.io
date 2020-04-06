const express = require("express");
const app = express();
app.use(express.static("public"));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/motorcycles', (req,res)=>{
    res.sendFile(__dirname + "/public/json/motorcycles.json")
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});