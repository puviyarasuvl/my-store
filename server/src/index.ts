import express from 'express';
import routes from './routes/index';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';

dotenv.config();

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
    throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file';
}

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
    res.send(
        'Server is up. API is ready for use. Please access the correct endpoints.'
    );
});

app.use('/api', routes);

console.log('Port ', process.env.PORT);

app.listen(port, () => {
    console.log(`Server started successfully at ${port}`);
});

export default app;
