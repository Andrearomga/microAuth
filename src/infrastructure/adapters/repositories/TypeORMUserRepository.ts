import { Repository } from 'typeorm';
import User from '../../../domain/entities/User';
import { UserRepository } from '../../../domain/repositories/UserRepository';
import UserEntity from '../entities/UserEntity';
import { AppDataSource } from '../../config/data-source';
import bcrypt from 'bcrypt';


export class TypeORMUserRepository implements UserRepository {

    private repositoryUser: Repository<UserEntity>;

    constructor() {
        this.repositoryUser = AppDataSource.getRepository(UserEntity);
    }

    async save(user: User): Promise<User> {
        let data: User = await this.repositoryUser.save(user);
        data = {
            ...data,
            password: undefined
        }
        return data;
    }

    async login(email: string, password: string): Promise<User> {
        let data: User = await this.repositoryUser.findOne({ where: { email } }) ?? { IdUser: 0, email: "", fullLastName: "", fullName: "", password: "" }
        // console.log(data)
        const match = await bcrypt.compare(password, data.password ?? "");
        // console.log(match)
        if (match) {
            data = {
                ...data,
                password: undefined
            }
            return data
        } else {
            data = { IdUser: 0, email: "", fullLastName: "", fullName: "", password: "" }
        }
        return data
    }

    async delete(IdUser: number): Promise<void> {
        await this.repositoryUser.delete(IdUser)
    }

}