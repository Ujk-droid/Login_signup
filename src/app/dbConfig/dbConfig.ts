import mongoose from "mongoose";
import { log } from "node:console";
import { connected } from "node:process";


export async function connect(){
    try {
    
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.Connection
        connection.on('connected',()=>{
            console.log('MONGggODB connected');
        })
        connection.on('error',()=>{
            console.log('Mongodb connection error, please make sure db is up and running'+ err);
            process.exit()
        })

    }catch(error){
        console.log('some thing went wrong in connecting to DB');
        console.log(error);
    }
}
