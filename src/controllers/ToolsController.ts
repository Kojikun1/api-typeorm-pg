import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Tool from '../models/Tool';

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

           const repository = getRepository(Tool);

           const tool = await repository.findOne({where: { title }});

           if(tool){
               return res.status(409).json("A Tool with this email already exists");
           }

           const newTool = repository.create({title, link, description, tags: JSON.stringify(tags) }); 

           await repository.save(newTool);

           return res.status(200).json({...newTool, tags: JSON.parse(newTool.tags)});
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