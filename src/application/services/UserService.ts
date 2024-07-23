import User from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import bcrypt from 'bcrypt';

export class UserService {

    constructor(private userRepository: UserRepository) { }

    async save(data: User): Promise<User> {
        if (data.password) {
            const step: number = 10;
            const hashedPassword = await bcrypt.hash(data.password, step);
            data.password = hashedPassword;
        }
        const dream: User = await this.userRepository.save(data);
        return dream;
    }

    async login(email: string, password: string): Promise<User> {
        const data: User = await this.userRepository.login(email, password);
        return data;
    }

    async delete(IdUser: number): Promise<void> {
        await this.userRepository.delete(IdUser);
    }

}
