import {Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController{
     async index( req: Request, res: Response){
          const repository = getRepository(User);

          console.log(req.userId);

          const user = await repository.findOne({where: { id: req.userId }, relations: ["tools"]});

          if(user) user.password = '';

          return res.status(200).json(user);
     }
     async store(req: Request , res: Response){
         const { email , password } = req.body;
         try {

         const repository =  getRepository(User);

         const user = await repository.findOne({where: { email}});

         if(user){
              return res.status(409).json({message: "Already Exist a user with this email"});
         }
          const newUser = repository.create({ email, password });

          await repository.save(newUser);

          newUser.password = '';
          
          return res.status(200).json({id: newUser.id,email: newUser.email });

         } catch (error) {

              console.log(error);
              
              return res.status(400).json({message: "failure to create User"});
         }
     }
}

export default new UserController();