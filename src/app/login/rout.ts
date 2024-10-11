'use client';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {toast} from "react-hot-toast";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
connect()

export async function POST(request:NextRequest){
    try{
        const reqBody = request.json()
        const {email,password} = reqBody;
        console.log(reqBody)

    const user  = await User.findOne({ email})

    if(user!){
        return NextResponse.json({error:"User Does not exit"},{status:400})

        const validPassword = await bcryptjs.compare(password,user.password)
        if(!validPassword){
            return NextResponse.json({error:"invalid pasword"},{status:400})
        }const tokenData = {passwordid:user._id,
            username:user.username,
            email:user.email
        } 
        const token = await jwt.sign(tokenData , process.
            env.TOKEN_SECRET, {expiresIn:"1h"}
        )
        const response = NextResponse.json({message:"login sucessful",
            success:true,
        })
        response.cookies.set("token", token,{
            httpOnly:true ,
             
        })
        return response;
       }

    }catch(error:any){
        return NextResponse.json({error:error.message},
            {status:500}
        )
    }
}