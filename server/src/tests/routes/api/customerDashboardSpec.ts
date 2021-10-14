import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);

describe('Testing dashboard route', () => {
    it('[get] /api/dashboard/cart should return the current order details', async () => {
        // Create new order and add some products

        await request
            .post('/api/orders/addProduct')
            .type('form')
            .send({ productId: 3, quantity: 5 })

            .expect(200);

        await request
            .post('/api/orders/addProduct')
            .type('form')
            .send({ productId: 2, quantity: 3 })

            .expect(200);

        const response = await request
            .get('/api/dashboard/cart/')
            .query({ userID: 'user@mystore.com' })

            .expect(200);

        expect(response.body.orderStatus).toEqual('open');
        expect(response.body.products.length).toEqual(2);
    });

    it('[get] /api/dashboard/orders should return completed orders', async () => {
        const response = await request.get('/api/dashboard/orders').expect(200);

        expect(response.body.orders.length).toEqual(2);
    });
});
