import { Injectable } from '@nestjs/common';
import {ExecutionContext}from '@nestjs/common';
import {JwtService}from "@nestjs/jwt"
import { Request,Response } from 'express';



// @Injectable()
export class AuthService {
private  jwtservice : JwtService

    constructor (public ExecutionContext:ExecutionContext){
//     // this.context = context
    this.jwtservice = new JwtService()
// this.ExecutionContext=this.ExecutionContext
}

 async get (req:Request,res:Response){
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header("Access-Control-Allow-Origin", "localhost:5173");
    // res.header({"Access-Control-Allow-Credentials": true});
    // res.header("Access-Control-Allow-Origin", "https://amacerp.onrender.com");
res.setHeader("ss","ssssssss")
    res.header("Access-Control-Max-Age", "54h");
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Set-Cookie');
    res.header("Set-Cookie", "sid=14A52; max-age=3600;samesite=None;sameSite=none ;SameSite=None ;Secure ")
 
    res.header("Set-Cookie", "sid=14A52; max-age=3600;samesite=None;sameSite=none ;SameSite=None ;Secure ")
    
    res.header({"ss":"sss"})
res.cookie("ss","sss")
console.log(req.headers)
// await this.jwtservice.signAsync("sssd",{secret:"gogo"})
    
// const request = this.ExecutionContext.switchToHttp().getRequest();
//     console.log(this.ExecutionContext)
    // const [type, token] = request.headers.authorization?.split(' ') ?? [];
// console.log(token)

}
    
}
