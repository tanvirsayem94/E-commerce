import mongoDbConnect from "@/lib/mongo";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
export async function POST(req){
    try {
        const {name, email, password} = await req.json();
        const encryptedPassword = await bcrypt.hash(password, 10);
        await mongoDbConnect();
        await User.create({name, email, password: encryptedPassword});
        return NextResponse.json({message: 'User Registerd'}, {status: 201});
    } catch (error) {
        return NextResponse.json({message:"An error occurred while registering the user"},{status: 500})
    }
}
