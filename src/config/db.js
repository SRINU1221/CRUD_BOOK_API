import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

//get the environment varible mongoURL from the dotenv
const MONGOURL = process.env.MONGOURL;

//connect the DB
const connectDB = async ()=>{
    try {
        await mongoose.connect(MONGOURL);
        console.log("MongoDb is connected");
    } catch (error) {
        console.log(error)
    }
};

export default connectDB;