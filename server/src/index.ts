import express from 'express';
import routes from './routes/index';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';

dotenv.config();

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
