import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes'
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3001;

app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
