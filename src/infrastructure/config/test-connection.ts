// src/infrastructure/config/test-connection.ts
import { AppDataSource } from './data-source';

const testConnection = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Data Source has been initialized!');
    } catch (err) {
        console.error('Error during Data Source initialization:', err);
    } finally {
        await AppDataSource.destroy();
    }
};

testConnection();
