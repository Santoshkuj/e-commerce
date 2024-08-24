import { config } from "dotenv";
import express from 'express';
import mongoose from 'mongoose';
import cloudinary from 'cloudinary'
import cors from 'cors';
import productRoute from './routes/productRoutes.js'
import userRouter from "./routes/userRoute.js";
config()

const mongo_uri = process.env.MONGO_URI;
const port = process.env.PORT;
const app = express()

app.use(express.json())
app.use(cors());

//cloudinary configuration
cloudinary.v2.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    api_key : process.env.CLOUDINARY_KEY,
    api_secret : process.env.CLOUDINARY_SECRET
})

//Database connection with mongodb
mongoose.connect(mongo_uri)

const db = mongoose.connection

db.on('error',(err)=>{
    console.log('failed to connect db',err);
    return;
})

db.once('open',()=>{
    console.log('Connected to database');

})

app.get('/',(req,res)=>{
    res.send("Express is running")
})
app.use('/api/product',productRoute)
app.use('/api/user',userRouter)

app.use('*',(req,res)=>{
    res.send('Page not found',)
})

app.listen(port,(error)=>{
    if(!error){
        console.log('server running on port '+port);
    }else{
        console.log('Error',error);
    }
})