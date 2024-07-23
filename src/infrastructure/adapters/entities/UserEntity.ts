
// src/infrastructure/adapters/entities/UserEntity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("lkp_users")
class UserEntity {

    @PrimaryGeneratedColumn()
    IdUser!: number;

    @Column()
    fullName!: string;

    @Column()
    fullLastName!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;
}

export default UserEntity;
