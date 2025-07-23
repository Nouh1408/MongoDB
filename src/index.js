import express from 'express'
const app =express()
const port =3000
import bootstrap from "./app.controller.js"
bootstrap(app,express)
app.listen(port,()=>{
    console.log("Server running on port ", port);
    
})