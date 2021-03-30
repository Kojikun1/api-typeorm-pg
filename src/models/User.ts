import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate  } from 'typeorm';
import bcrypt from 'bcrypt';

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
}

export default User;