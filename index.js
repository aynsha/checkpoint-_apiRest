const express= require('express');
const app= express();
const cors= require('cors')
require("dotenv").config({path : "./Config/.env"})
require('./Config/db.js')

app.use(cors())
app.use(express.json())

const userRouter= require('./Routers/userRouter');
app.use("/api", userRouter);


const port= 5000
app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
    
})







