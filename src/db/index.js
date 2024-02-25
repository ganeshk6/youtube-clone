import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const connectionString = await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`)
        console.log(`\n MOngoDB connected !! DB HOST: ${connectionString.connection.host}`);
    }catch (error){
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB;