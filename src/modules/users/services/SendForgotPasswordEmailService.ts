import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import UserTokensRepository from "../typeorm/repositories/UserTokensRepository";
import EtherealMail from '@config/mail/EtherealMail';
interface IRequest 
{
    email: string
}

class SendForgotPasswordEmailService
{
    public async execute({email}: IRequest) : Promise<void>
    {
        
        const usersRepository = getCustomRepository(UsersRepository);

        const userTokensRepository = getCustomRepository(UserTokensRepository);

        const user = await usersRepository.findByEmail(email);

        if(!user)
        {
            throw new AppError('User not find');
        }

        const token = await userTokensRepository.generate(user.id);

        console.log(token);
        
        await EtherealMail.sendEmail({
            to: email,
            body : `Recorvery password token : ${token?.token}`
        })
    
    }
}

export default SendForgotPasswordEmailService;