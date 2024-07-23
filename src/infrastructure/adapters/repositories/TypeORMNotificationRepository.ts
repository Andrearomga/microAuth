import { Repository } from 'typeorm';
import Dream from '../../../domain/entities/Notification';
import { NotificationRepository } from '../../../domain/repositories/NotificationRepository';
import NotificationEntity from '../entities/NotificationEntity';
import { AppDataSource } from '../../config/data-source';

export class TypeORMNotificationRepository implements NotificationRepository {

    private repositoryDream: Repository<NotificationEntity>;

    constructor() {
        this.repositoryDream = AppDataSource.getRepository(NotificationEntity);
    }

    async save(data: Dream): Promise<Dream> {
        let baby: Dream = await this.repositoryDream.save(data);
        return baby
    }

    async list(IdUser: number): Promise<Dream[]> {
        let dream: Dream[] = await this.repositoryDream.find({ where: { IdUser } });
        return dream
    }

}