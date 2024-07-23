// src/infrastructure/config/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import Notification from '../adapters/entities/NotificationEntity';
import User from '../adapters/entities/UserEntity';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "babylink",
    password: "123",
    database: "db_baby_link_notification",
    entities: ["dist/domain/entities/*.js", Notification, User],
    synchronize: true,
    logging: false,
    // migrations: [],
    // subscribers: []
});
