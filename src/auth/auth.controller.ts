import { Controller, Get,Req, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import {JwtService}from "@nestjs/jwt"
import { Request,Response } from 'express';

@Controller('auth')
export class AuthController {
constructor(private authservice:AuthService){}


@Post("login")
get (@Req() req:Request,@Res() res:Response){
    res.header("Access-Control-Allow-Origin", "https://vite-project-ten-psi.vercel.app/");

     res.header("Access-Control-Allow-Origin", "https://vite-project-ten-psi.vercel.app");
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    // res.header("Access-Control-Allow-Origin", "localhost:5173");
    res.header({"Access-Control-Allow-Credentials": true});
res.setHeader("ss","ssssssss")
    res.header("Access-Control-Max-Age", "555555555555");
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Set-Cookie');
    res.header("Set-Cookie", "sid=14A52; max-age=555555555555;samesite=None;sameSite=none ;SameSite=None ;Secure ")
 
    res.header("Set-Cookie", "sid=14A52; max-age=555555555555;samesite=None;sameSite=none ;SameSite=None ;Secure ")
    
    res.header({"ss":"sss"})
res.cookie("ss","sss")
return this.authservice.get(req , res);
// re
    
}

}
