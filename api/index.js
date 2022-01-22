const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
app.use(cors())
dotenv.config();
app.get("/" , (req,res)=>{
    console.log("working");
    
})
// console.log(process.env.DATABASE)
// mongoose.connect(source, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// })

// const connection = mongoose.connection
// connection.once('open', () => {
//     console.log("DB connected.");
// })

app.listen(3000,()=>{
    console.log("app working on 3000")
})