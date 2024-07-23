import { Router, Request, Response, NextFunction } from 'express';
import { UserService } from '../application/services/UserService';
import { TypeORMUserRepository } from '../infrastructure/adapters/repositories/TypeORMUserRepository';
import {  UserController} from '../infrastructure/adapters/controllers/UserController';
import AuthMiddleware from '../infrastructure/middleware/AuthMiddleware';


const authMiddleware: AuthMiddleware = new AuthMiddleware();
const { validateUserToken } = authMiddleware;

const userRoutes = Router();

const userRepository = new TypeORMUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRoutes.post(
    '/save',
    // (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => userController.save(req, res)
);

userRoutes.post(
    '/login',
    // (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => userController.login(req, res)
);

userRoutes.post(
    '/validate/token',
    // (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => userController.validateToken(req, res)
);

userRoutes.delete(
    '/delete/:IdUser',
    // (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => userController.delete(req, res)
);


export default userRoutes;
