import mongoDbConnect from "@/lib/mongo";
import PostSeller from "@/models/postSeller";

import { NextResponse } from "next/server";
export async function POST(req,content){
    try {
        
        const id = content.params.id;
        const {feedback,authorEmail} = await req.json();
        console.log(feedback,authorEmail)
        await mongoDbConnect();
            await PostSeller.create({feedback,authorEmail});
           return NextResponse.json({msg:"successfully user created"},{status: 201})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"An error occurred while registering the user"},{status: 500})
    }
}

export async function DELETE(req,content){
    const id = content.params.id;
    const query = {_id:id}
    await mongoDbConnect()
    const result = await PostSeller.deleteOne(query)
    return NextResponse.json({result},{success: true})
  }

