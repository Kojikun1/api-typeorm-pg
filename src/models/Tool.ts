import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn  } from 'typeorm';
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
    
    @ManyToOne(() => User, user => user.tools)
    user: User;
}

export default Tool;