import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3002;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
