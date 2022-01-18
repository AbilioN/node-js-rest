import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity
class User{
    @PrimaryColumn('id')
    id : string

    @Column()
    name : string

    @Column()

    email: string;

    @Column()

    password : string;

    @Column()

    avatar : string;

    @CreateDateColumn()

    created_at : Date;

    @UpdateDateColumn()

    updated_at : Date;
}

export default User;