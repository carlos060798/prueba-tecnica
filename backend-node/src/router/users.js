import { Router } from 'express';
import { readFile } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const router = Router();

// Variables para obtener la ruta actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ruta para obtener los usuarios

router.get('/', (req, res) => {
    const filePath = join(__dirname, '../DB/data.json');
    readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error al leer el archivo' });
        } else {
            res.status(200).json(JSON.parse(data));
        }
    });
});

export default router;

