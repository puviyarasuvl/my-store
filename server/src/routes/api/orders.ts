import express from 'express';

import { OrderModel } from '../../models/order';

const orderRouter = express.Router();

const orderModel = new OrderModel();

const userId: string = 'user@mystore.com';

const index = async (_req: express.Request, res: express.Response) => {
    try {
        const result = await orderModel.index(userId);
        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(`Error : ${err}`);
    }
};

const show = async (req: express.Request, res: express.Response) => {
    try {
        const result = await orderModel.show(parseInt(req.params.orderId));
        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(`Error : ${err}`);
    }
};

const updateStaus = async (req: express.Request, res: express.Response) => {
    try {
        const result = await orderModel.update(
            parseInt(req.body.orderId),
            req.body.status
        );
        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(`Error : ${err}`);
    }
};

const addProduct = async (req: express.Request, res: express.Response) => {
    try {
        const result = await orderModel.addProduct(
            parseInt(req.body.productId),
            parseInt(req.body.quantity),
            userId
        );

        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(`Error : ${err}`);
    }
};

const updateQuantity = async (req: express.Request, res: express.Response) => {
    try {
        const result = await orderModel.updateQuantity(
            parseInt(req.body.productId),
            parseInt(req.body.quantity),
            userId
        );

        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(`Error : ${err}`);
    }
};

const removeProduct = async (req: express.Request, res: express.Response) => {
    try {
        const result = await orderModel.removeProduct(
            parseInt(req.params.productId),
            userId
        );

        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(`Error : ${err}`);
    }
};

orderRouter.get('/', (req, res) => {
    index(req, res);
});

orderRouter.get('/:orderId', (req, res) => {
    show(req, res);
});

orderRouter.patch('/updateStatus', (req, res) => {
    updateStaus(req, res);
});

orderRouter.post('/addProduct', (req, res) => {
    addProduct(req, res);
});

orderRouter.patch('/updateQty', (req, res) => {
    updateQuantity(req, res);
});

orderRouter.delete('/removeProduct/:productId', (req, res) => {
    removeProduct(req, res);
});

export default orderRouter;
