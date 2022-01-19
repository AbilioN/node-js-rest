import { Request, Response } from "express";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

export default class UserAvatarController 
{


    public async update(request : Request , response : Response) : Promise<Response>
    {
        const updateAvater = new UpdateUserAvatarService();

        const user = updateAvater.execute({
            user_id : request.user.id,
            avatarFileName : request.file.filename
        });

        return response.json(user);
    }

}