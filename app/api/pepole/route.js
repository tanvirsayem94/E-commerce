import { verifyJWT } from "@/app/component/jwt";
import mongoDbConnect from "@/lib/mongo";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function  GET(req) {
    try {
      await mongoDbConnect();
      const authorizationHeader = new Headers(req.headers);
     const authorization = authorizationHeader.get("authorization")
     const token = authorization.split(' ')[1];
     
      const sayem = verifyJWT(token);
      console.log("sayem", sayem)
      const user = await User.find();
      
      return NextResponse.json({ user });
    } catch (error) {
      console.log(error);
    }
    
  }
  