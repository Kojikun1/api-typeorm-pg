import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToMany  } from 'typeorm';
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
    @OneToMany(type => Tool,user => User)
    tools: Tool[];
};

export default User;