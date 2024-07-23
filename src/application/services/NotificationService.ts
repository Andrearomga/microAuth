import Dream from '../../domain/entities/Notification';
import { NotificationRepository } from '../../domain/repositories/NotificationRepository';

export class NotificationService {

    constructor(private dreamRepository: NotificationRepository) { }

    async save(data: Dream): Promise<Dream> {        
        const dream: Dream = await this.dreamRepository.save(data);
        return dream;
    }

    async list(IdUser: number): Promise<Dream[]> {
        const dreams: Dream[] = await this.dreamRepository.list(IdUser);
        return dreams;
    }

}
