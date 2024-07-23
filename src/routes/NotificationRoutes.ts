import { Router, Request, Response, NextFunction } from 'express';
import { NotificationService } from '../application/services/NotificationService';
import { TypeORMNotificationRepository } from '../infrastructure/adapters/repositories/TypeORMNotificationRepository';
import {  NotificationController} from '../infrastructure/adapters/controllers/NotificationController';
import AuthMiddleware from '../infrastructure/middleware/AuthMiddleware';


const authMiddleware: AuthMiddleware = new AuthMiddleware();
const { validateUserToken } = authMiddleware;

const notificationRoutes = Router();

const notificationRepository = new TypeORMNotificationRepository();
const notificationService = new NotificationService(notificationRepository);
const notificationController = new NotificationController(notificationService);

notificationRoutes.get(
    '/list/:IdUser',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => notificationController.list(req, res)
);

notificationRoutes.post(
    '/save',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => notificationController.save(req, res)
);

export default notificationRoutes;
