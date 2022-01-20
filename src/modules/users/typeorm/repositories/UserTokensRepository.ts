import { EntityRepository, Repository } from "typeorm";
import {v4 as uuidV4 } from 'uuid';
import UserToken from "../entities/UserToken";

@EntityRepository(UserToken)
class UserTokensRepository extends Repository <UserToken>
{
    
    public async findByToken(token : string ) : Promise < UserToken | undefined> 
    {
        const userToken = await this.findOne({
            where : {
                token,
            }
        });

        return userToken;
    }

    public async generate(user_id : string) : Promise <UserToken>
    {
        const userToken = await this.create({
            id : this.generateNewId(),
            token : this.generateNewId(),
            user_id : user_id,
        });

        await this.save(userToken);

        return userToken;
    }

    public generateNewId() : string
    {
        return uuidV4();
    }
}

export default UserTokensRepository;