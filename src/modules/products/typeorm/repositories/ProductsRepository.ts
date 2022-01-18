import { Entity , EntityRepository, Repository } from "typeorm";
import Product from "../entities/Product";
import {v4 as uuidV4 } from 'uuid';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product>
{
    public async findByName(name : String) : Promise < Product | undefined >
    {
        const product  = this.findOne({
            where:{
                name,
            },
        });


        return product;
    }

    public generateNewId() : String
    {
        return uuidV4();
    }
}
