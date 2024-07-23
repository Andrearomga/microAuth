


import { Request, Response } from 'express';
import { NotificationService } from '../../../application/services/NotificationService';
import Dream from '../../../domain/entities/Notification';



export class NotificationController {

    private dreamService: NotificationService;

    constructor(dreamService: NotificationService) {
        this.dreamService = dreamService;
    }

    async save(req: Request, res: Response): Promise<void> {
        let data: Dream = req.body.notification ?? { IdNotification: 0, date: "1990-01-01", IdUser: 0, time: "000:00:00", text: "" };
        const dream: Dream = await this.dreamService.save(data);

        res.status(200).json({
            status: 200,
            message: `Notificación guardada`,
            value: dream
        });
    }

    async list(req: Request, res: Response): Promise<void> {
        let IdUser: number = isNaN(Number(req.params.IdUser)) ? 0 : Number(req.params.IdUser);
        const dreams: Dream[] = await this.dreamService.list(IdUser);

        res.status(200).json({
            status: 200,
            message: `Se listaron ${dreams.length} notificaciones`,
            value: dreams
        });
    }

}



