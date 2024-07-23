// src/domain/repositories/UserRepository.ts
import Dream from '../entities/Notification';

export interface NotificationRepository {
    save(dream: Dream): Promise<Dream>;
    list(IdBaby: number): Promise<Dream[]>;
}
