import { Column, Entity, ManyToOne, PrimaryGeneratedColumn  } from 'typeorm';
import User from './User';

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
    
    @ManyToOne(type => User, tools => Tool)
    user: User;
}

export default Tool;