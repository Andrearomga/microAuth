// src/domain/repositories/UserRepository.ts
import User from '../entities/User';

export interface UserRepository {
    save(user: User): Promise<User>;
    login(email: string, password: string): Promise<User>;
    delete(IdUser: number): Promise<void>;
}
