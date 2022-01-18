import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import { ProductRepository } from "../typeorm/repositories/ProductsRepository";

interface IRequest 
{
    name: string
    price: number
    quantity: number
}

class ListProductService
{
    public async execute() : Promise<Product[]>
    {
        const productsRepository = getCustomRepository(ProductRepository);

        const products  = await productsRepository.find();

        return products;
    }
}

export default ListProductService;