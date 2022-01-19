import AppError from "@shared/errors/AppError";
import { compare, hash } from "bcryptjs";
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest 
{
    email: string
    password: string
}

interface IResponse
{
    user : User
    token: string
}

class CreateSessionService
{
    public async execute({email, password}: IRequest) : Promise<IResponse>
    {
   
        const usersRepository = getCustomRepository(UsersRepository);
        const user = await usersRepository.findByEmail(email);
        if(!user)
        {
            throw new AppError('Incorrect email/password combination.' , 401);
        }

        const passwordConfirmed = await compare(password, user.password);

        if(!passwordConfirmed)
        {
            throw new AppError('Incorrect email/password combination.' , 401);
        }
        
        const token = sign({}, 'ab80e5b7fc9dbf1d7306145f0e929bd4' , {
            subject : user.id,
            expiresIn : '1d'
        });

        
        return {
            user,
            token,
        }

    }
}

export default CreateSessionService;