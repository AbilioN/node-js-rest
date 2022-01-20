import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('users_token')
class UserToken{
    @PrimaryColumn()
    id : string

    @Column()
    token : string

    @Column()

    user_id: string;

    @CreateDateColumn()

    created_at : Date;

    @UpdateDateColumn()

    updated_at : Date;
}

export default UserToken;