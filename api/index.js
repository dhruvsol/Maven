const express =require('express')

const app =express()

app.get("/" , (req,res)=>{
    res.render('Login.component.jsx')
})

app.listen(3000)