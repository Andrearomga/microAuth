// src/infrastructure/config/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import Notification from '../adapters/entities/NotificationEntity';
import User from '../adapters/entities/UserEntity';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "autenticacion.crawrvlmcbr6.us-east-1.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "12345678",
    database: "db_baby_link_notification",
    entities: ["dist/domain/entities/*.js", Notification, User],
    synchronize: true,
    logging: false,
    // migrations: [],
    // subscribers: []
});
