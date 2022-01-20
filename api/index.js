const express = require('express')

const app = express()

app.get("/" , (req,res)=>{
    console.log("working");
    
})

app.listen(3000)