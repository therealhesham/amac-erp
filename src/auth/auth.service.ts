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
