import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";
export const verifyJWT = (sayem) =>{
    
    if(!sayem){
      return {user:"nai"}
    }
    // console.log(authorization)
    try {
      const decoded = jwt.verify(sayem, 'jwtsecret',{ algorithms: ['HS256']});
    return {decoded};
    } catch (error) {
      return "error"
    }
    
  }

