import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Tool from '../models/Tool';
import User from '../models/User';

class ToolController {
      async index(req: Request , res: Response) {
        const repository = getRepository(Tool);

        const tools = await repository.find();

        const parsedTools = tools.map(item => {
            return {...item, tags: JSON.parse(item.tags)}
        })

        return res.status(200).json(parsedTools);
      }
      async store(req: Request , res: Response) {

           const { title, link, description } = req.body;

           const tags = req.body.tags;

           try {
            const repository = getRepository(Tool);

            const tool = await repository.findOne({where: { title }});
 
            if(tool){
                return res.status(409).json("A Tool with this email already exists");


            }

            const user = await getRepository(User).findOne({where: { id: req.userId }});

            if(user) user.password = '';
 
            const newTool = repository.create({title, link, description, tags: JSON.stringify(tags), user }); 
              
            await repository.save(newTool);
            
           /* if(user){
              console.log("user Exist");
              if(user.tools){
                 console.log("add to existent");
                 user.tools = [...user.tools,newTool];
              }else {
                 console.log("add new");
                 user.tools = [newTool];
              } 
 
             await getRepository(User).save(user);
 
            } */
 
             return res.status(201).json({...newTool, tags: JSON.parse(newTool.tags)});
           } catch (error) {
             console.log(error);
             return res.status(400).json({message: "Falure to create Tool"});
           }
      }
      async search(req: Request , res: Response ){
      const { tag } = req.query;
       
      const tools = await getRepository(Tool).find();
      
      const filteredTools = tools.filter(item => {
          return JSON.parse(item.tags).includes(tag);
      })

      const parsedTools = filteredTools.map(item => {
        return {...item, tags: JSON.parse(item.tags)}
    })
    return res.status(200).json(parsedTools);
 
      }
      async delete(req: Request , res: Response ){
            const id = req.params.id;

            console.log(id);

            await getRepository(Tool).delete(id);

            return res.status(204).json({message: "Content Removed"});
      }
}

export default new ToolController();