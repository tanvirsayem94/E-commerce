import mongoDbConnect from "@/lib/mongo";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const authOptions = {
    
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{},

            async authorize(credentials){
                const {email, password} = credentials;
                try {
                    await mongoDbConnect();
                    const user = await User.findOne({email});
                    if(!user){
                        return null;
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if(!passwordMatch){
                        
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.log(error)
                }
                    
            }
        })
    ],
    session:{
        strategy: "jwt",
    },
    secret:process.env.NEXAUTHSECRET,
    pages:{
        signIn: "/login"
    }
};
const handler = NextAuth(authOptions);
export{handler as GET, handler as POST};