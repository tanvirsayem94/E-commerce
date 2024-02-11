import mongoDbConnect from "@/lib/mongo";
import User from "@/models/user";
import { NextResponse } from "next/server";

// export async function  POST(req){
//     try {
//         await mongoDbConnect();
//         const {email} = await req.json();
//         const user = await User.findOne({email}).select("_id");
//         return NextResponse.json({user})
//     } catch (error) {
//         console.log(error)
        
//     }

// }
// import { connectMongoDB } from "@/lib/mongodb";
// import User from "@/models/user";
// import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await mongoDbConnect();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("user: ", user);
    
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
