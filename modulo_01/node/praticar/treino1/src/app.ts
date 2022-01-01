import express from 'express';
import cors from 'cors';
import router from './routes';

const app =  express();

const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(PORT, () => console.log('Running on port 5000'));