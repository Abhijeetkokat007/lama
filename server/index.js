import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 5000

const connectDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URI)
    if (connection) {
        console.log(`mongoDB connected`)
    }
    } catch(e){
        console.log(e.message);
    }  
}


app.listen(PORT, () => {
    console.log(`server is runing ${PORT}`)
    connectDB();
})