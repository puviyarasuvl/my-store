import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {
    POSTGRES_HOST_PROD,
    POSTGRES_HOST_DEV,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    ENV,
} = process.env;

let pool: Pool = new Pool();

console.log('Environment : ', ENV);

if (ENV === 'dev') {
    pool = new Pool({
        host: POSTGRES_HOST_DEV,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    });
} else if (ENV === 'test') {
    pool = new Pool({
        host: POSTGRES_HOST_DEV,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    });
} else if (ENV === 'prod') {
    pool = new Pool({
        host: POSTGRES_HOST_PROD,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    });
} else {
    console.log('Unsupported environment. ENV : ', ENV);
}

export default pool;
