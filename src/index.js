import express from 'express';
import usuariosRoutes from './routes/usuarios.routes.js';
import cors from 'cors';
const app = express();

app.use(express.json());

app.use(cors())

app.use('/api',usuariosRoutes);

app.listen(3000);
console.log("Server corriendo en puerto 3000 del contenedor");