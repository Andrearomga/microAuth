import express from 'express';
import { connectDatabase } from './infrastructure/config/database';
import DreamRoutesRoutes from './routes/NotificationRoutes';
import UserRoutes from './routes/UserRoutes';

const startServer = async () => {


    console.clear();

    await connectDatabase();

    const app = express();
    app.use(express.json());

    const URLBase = "";

    app.use(`${URLBase}/notification`, DreamRoutesRoutes);
    app.use(`${URLBase}/user`, UserRoutes);

    const PORT = 7000;0
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

    // const INTERVALO_MINUTOS = 5;
    // const INTERVALO_MILISEGUNDOS = INTERVALO_MINUTOS * 1 * 1000;

    // function miFuncion() {
    //     console.log('La función se está ejecutando cada 5 minutos');
    // }


    // setInterval(miFuncion, INTERVALO_MILISEGUNDOS);

};

startServer();
