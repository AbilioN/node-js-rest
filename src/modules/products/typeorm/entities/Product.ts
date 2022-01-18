import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('products')
class Product  {


    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column('decimal')
    price : number;

    @Column('int')
    quantity: number;

    @CreateDateColumn()
    created_at : Date;

    @UpdateDateColumn()
    updated_at : Date;

    

}

export default Product;