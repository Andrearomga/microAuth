// src/infrastructure/adapters/entities/UserEntity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("lkp_notification")
class NotificationEntity {

    @PrimaryGeneratedColumn()
    IdNotification!: number;

    @Column()
    IdUser!: number;

    @Column()
    text!: string;

    @Column({ type: 'date' })
    date!: string;

    @Column({ type: 'time' })
    time!: string;
}

export default NotificationEntity;
