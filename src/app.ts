import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import express, { json } from 'express';

import { loadEnv } from './configs/loadEnvs';
import handleApplicationErrors from './middlewares/error.middleware';
import locationRouter from './routes/location.route';
import transactionRouter from './routes/transaction.route';
import userRouter from './routes/user.route';
import villageRouter from './routes/village.route';

loadEnv();

const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true
  })
);
app.use(json());
app.use(helmet());
app.use(morgan('dev'));
app.get('/', (_req, res) => res.send('OK!'));
app.use('/users', userRouter);
app.use('/villages', villageRouter);
app.use('/locations', locationRouter);
app.use('/marketplace', transactionRouter);
app.use(handleApplicationErrors);

export default app;
