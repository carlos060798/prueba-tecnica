

import express, { Request, Response } from 'express';
import "reflect-metadata";
import bodyParser from 'body-parser';
import AppDataSource from './migration/data-source';
import  photoRouter  from './routes/router';


const app = express();

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});


// Rest of the code...
app.use('/api', photoRouter);
const startServer = async () => {
    try {
      // Inicializar la conexión a la base de datos
      await AppDataSource.initialize();
      console.log('Conexión exitosa a la base de datos');
  
      // Iniciar el servidor
      app.listen(3000, () => {
        console.log(`Servidor ejecutándose en http://localhost:3000`);
      });
    } catch (error) {
      console.error('Error al iniciar el servidor:', error);
    }
  };
  
  startServer();