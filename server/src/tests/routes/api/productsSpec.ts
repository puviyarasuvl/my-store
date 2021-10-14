import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);

describe('Testing products route', () => {
    it('[get] /api/products should return all available products information', async () => {
        const response = await request.get('/api/products/getProduct');
        expect(response.status).toEqual(200);

        expect(response.body).toEqual([
            {
                id: 2,
                name: 'Headphones',
                price: 249.99,
                category: 'Mobile Accessories',
                description: 'Listen to stuff!',
                url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            {
                id: 3,
                name: 'Backpack',
                price: 79.99,
                category: 'Travel',
                description: 'Carry things around town!',
                url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
        ]);
    });

    it('[get] /api/products/4 should return product information for given id', async () => {
        const response = await request.get('/api/products/getProduct/3');
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({
            id: 3,
            name: 'Backpack',
            price: 79.99,
            category: 'Travel',
            description: 'Carry things around town!',
            url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        });
    });

    it('[get] /api/products/category/Mobiles should return the products in the give category', async () => {
        const response = await request.get('/api/products/category/Travel');
        expect(response.status).toEqual(200);
        expect(response.body).toEqual([
            {
                id: 3,
                name: 'Backpack',
                price: 79.99,
                category: 'Travel',
                description: 'Carry things around town!',
                url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
        ]);
    });
});
