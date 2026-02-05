import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import route from './routes/UserRoute.js'
const app=express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
const PORT =process.env.PORT || 8009;
const MONGO_URL =process.env.MONGO_URL;
mongoose.connect(MONGO_URL).then(()=>{
    console.log("mongodb connection success.....")
   app.listen(PORT,()=>{
    console.log(`server port listening at ${PORT}...`)
   })
}).catch((err)=>{
    console.log("Error",err.toString())
})
app.use("/api",route)