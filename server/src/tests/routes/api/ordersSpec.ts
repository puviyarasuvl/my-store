import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);

describe('Testing orders route', () => {
    it('[get] /api/orders should return all the orders information', async () => {
        const response = await request
            .get('/api/orders')
            .type('form')

            .expect(200);

        expect(response.body.length).toEqual(1);
    });

    it('[post] /api/orders/addProduct should allow user to add products to the cart (open order)', async () => {
        const response = await request
            .post('/api/orders/addProduct')
            .type('form')
            .send({ productId: 3, quantity: 5 })
            .expect(200);

        expect(response.body).toEqual({
            id: 3,
            orderid: 2,
            productid: 3,
            quantity: 5,
        });
    });

    it('[get] /api/orders/2 should return specified order details to the user', async () => {
        const response = await request.get('/api/orders/2').expect(200);

        expect(response.body.userid).toEqual('user@mystore.com');
        expect(response.body.status).toEqual('open');
    });

    it('[patch] /api/orders should allow user to update the status', async () => {
        const response = await request
            .patch('/api/orders/updateStatus')
            .type('form')
            .send({ orderId: 2, status: 'placed' })
            .expect(200);

        expect(response.body.status).toEqual('placed');
    });
});
