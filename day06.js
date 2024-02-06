const express = require("express")
const app = express();
const PORT = 4040;
app.get("/",(req,res)=>{
    res.send("Home Page!")
})
function greetHandler(req, res) {
    const name =  req.query.name || 'Guest' ;
    res.send(`Hello, ${name}!`);
  }
app.get("/greet",greetHandler)
app.listen(PORT,()=>{
    console.log("App Started at Port ->",PORT);
})