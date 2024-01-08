import { Controller, Get,Req, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import {JwtService}from "@nestjs/jwt"
import { Request,Response } from 'express';

@Controller('auth')
export class AuthController {
constructor(private authservice:AuthService){}


@Post("login")
get (@Req() req:Request,@Res() res:Response){
return this.authservice.get(req , res);
// re
    
}

}
