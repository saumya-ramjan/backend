
import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
     const connectioonInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongodb connected || db host ${connectioonInstance.connection.host}`)
    } catch (error) {
        console.log('mongodb connection faild', error);
        process.exit(1);
    }
}


export default connectDB;