import User from "../models/User";
import { getRepository } from 'typeorm';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from 'express';

class SessionController{
    async store(req: Request ,res: Response){
        
        const {email,password} = req.body;
        
      try{

         const respository = getRepository(User);

         let user = await respository.findOne({where: { email }});

         if(!user){
             return res.status(404).json({message: "User not found with this email"});
         }

         let isCorrectPass = await bcrypt.compare(password,user.password);

         if(!isCorrectPass){
             return res.status(401).json({message: "Wrong password"});
         }

         user.password = '';


         const token = jwt.sign({userId: user.id},process.env.APP_SECRET as string,{
             expiresIn: '1d'
         });

  
         return res.status(200).json({ user, token});

      }catch(error){
         console.log(error);
         return res.status(400).json({message: "Failure to Sign In"});
      }
       
    }
}

export default new SessionController();