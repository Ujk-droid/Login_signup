import { connect } from "../dbConfig/dbConfig";
import User from "../models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs"; 
import axios from 'axios';

connect()

export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json()
         const {userName,email,password} = reqBody 
         console.log(reqBody);

        const user = await User.findOne({ email})
        if(user){
            return NextResponse.json({error: "User already exits"},{status:400})
        }

        const salt =await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash
        (password, salt)

        const newUser = new User( {
            userName,
            email,
            password:hashedPassword

        })
         const saveUser = await newUser.save()
        
            console.log(saveUser)
            
            return NextResponse.json({
                message:"User created successfully",
                success: true,
                savedUser:
            })

    }catch (error:any){
return NextResponse.json({error:error.message},{status:500});
    }
}
