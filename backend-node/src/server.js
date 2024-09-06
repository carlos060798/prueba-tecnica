import express from 'express';
import usersRouter from './router/users.js';

const app = express();
const PORT = 3000;

// Middleware para el manejo de JSON
app.use('/users', usersRouter);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

