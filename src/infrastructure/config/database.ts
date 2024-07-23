// src/infrastructure/config/database.ts
import { AppDataSource } from './data-source';

export const connectDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Data Source has been initialized!');
    } catch (err) {
        console.error('Error during Data Source initialization:', err);
    }
};
