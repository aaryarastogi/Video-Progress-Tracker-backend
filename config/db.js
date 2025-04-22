import mongoose from "mongoose";

export const connectDB=async(username,password)=>{
    const URL= `mongodb+srv://aaryarastogi:videoprogresstracker@videoprogresstracker.xfbpfxb.mongodb.net/?retryWrites=true&w=majority&appName=videoProgressTracker`
    try {
        await mongoose.connect(URL,{});
        console.log('connected to mongodb')
    } catch (error) {
        console.log('error while connecting with database',error.message);
    }
}

export default connectDB;