


import { Request, Response } from 'express';
import { UserService } from '../../../application/services/UserService';
import User from '../../../domain/entities/User';
import AuthMiddleware from '../../middleware/AuthMiddleware';



export class UserController {

    private userService: UserService;
    private authMiddleware: AuthMiddleware = new AuthMiddleware()

    constructor(userService: UserService) {
        this.userService = userService;
    }

    async save(req: Request, res: Response): Promise<void> {
        let data: User = req.body.user ?? { IdUser: 0, email: "", fullLastName: "", fullName: "", password: "", token: "" };
        const user: User = await this.userService.save(data);        
        user.token = user.IdUser === 0 ? "" : this.authMiddleware.generateToken(user);
        user.password = undefined;
        res.status(200).json({
            status: 200,
            message: `Notificación guardada`,
            value: user
        });
    }

    async login(req: Request, res: Response): Promise<void> {
        let email: string = req.body.email ?? "";
        let password: string = req.body.password ?? "";  
        // console.log({email, password})      
        const user: User = await this.userService.login(email, password);
        user.token = user.IdUser === 0 ? "" : this.authMiddleware.generateToken(user);
        user.password = undefined;
        res.status(200).json({
            status: 200,
            message: `Dato obtenido`,
            value: user
        });
    }

    async delete(req: Request, res: Response): Promise<void> {
        const IdUser: string = req.params.IdUser ?? "0"     
        await this.userService.delete(+IdUser);        
        
        res.status(200).json({
            status: 200,
            message: `Usuario eliminado`,            
        });
    }

    async validateToken(req: Request, res: Response): Promise<void> {
        // console.log("Validado token")
        const token: string = req.body.token ?? "";
        // console.log({token})
        const value: boolean = await this.authMiddleware.validateToken(token)    
        res.status(200).json({
            status: 200,
            message: `token ${value ? "valido" : "invalido"}`,
            value: true//value
        });
    }

}



