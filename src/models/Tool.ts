import { Column, Entity, PrimaryGeneratedColumn  } from 'typeorm';

@Entity("tools")
class Tool {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    title: string;
    
    @Column()
    link: string;

    @Column()
    description: string;

    @Column()
    tags: string
}

export default Tool;