import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/user.routes'

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3001;

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
