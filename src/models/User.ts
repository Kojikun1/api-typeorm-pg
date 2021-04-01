import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, ManyToMany, JoinTable  } from 'typeorm';
import bcrypt from 'bcrypt';
import Tool from './Tool';

@Entity("users")
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    email: string;
    
    @Column()
    password: string;
    
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.password = bcrypt.hashSync(this.password,8);
    }
    @ManyToMany(type => Tool)
    @JoinTable()
    tools: Tool[];
};

export default User;