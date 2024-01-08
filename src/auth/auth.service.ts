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
    res.header("Access-Control-Allow-Origin", "https://vite-project-ten-psi.vercel.app/");

     res.header("Access-Control-Allow-Origin", "https://vite-project-ten-psi.vercel.app");
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    // res.header("Access-Control-Allow-Origin", "localhost:5173");
    res.header({"Access-Control-Allow-Credentials": true});
res.setHeader("ss","ssssssss")
    res.header("Access-Control-Max-Age", "555555555555");
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Set-Cookie');
    // res.header("Set-Cookie", "sid=14A52; max-age=555555555555;samesite=None;sameSite=none ;SameSite=None ;Secure ")
    // res.header("Set-Cookie", "naglaael2mradel=14Aaasdasdasdasdasdasadssadaweqw52; max-age=555555555555;samesite=None;sameSite=none ;SameSite=None ;Secure ")
 
    // res.header("Set-Cookie", "sid=14A52; max-age=555555555555;samesite=None;sameSite=none ;SameSite=None ;Secure ")
    
    res.header({"ss":"sssasdasdadsqwdasdasdjdnkjasdnaskjdnajskdnask"})
res.cookie("ss","sss")
console.log(req.headers.cookie)
const jwt = await this.jwtservice.signAsync("sssd",{secret:"gogo"})
    res.send(req.headers)
// const request = this.ExecutionContext.switchToHttp().getRequest();
//     console.log(this.ExecutionContext)
    // const [type, token] = request.headers.authorization?.split(' ') ?? [];
// console.log(token)

}
    
}
