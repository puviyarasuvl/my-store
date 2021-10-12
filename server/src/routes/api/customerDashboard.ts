import express from 'express';
import { checkJwt } from '../../services/authenticator';
import { CustomerDashboard } from '../../services/customerDashboard';

const dashboardRouter = express.Router();

const customerDashboard = new CustomerDashboard();
const userId: string = 'user@mystore.com';

const currentOrder = async (req: express.Request, res: express.Response) => {
    try {
        const result = await customerDashboard.currentOrder(userId);
        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(`Error : ${err}`);
    }
};

const completedOrders = async (req: express.Request, res: express.Response) => {
    try {
        const result = await customerDashboard.completedOrders(userId);
        res.send(result);
    } catch (err) {
        res.status(400);
        res.send(`Error : ${err}`);
    }
};

dashboardRouter.get('/cart', (req, res) => {
    currentOrder(req, res);
});

dashboardRouter.get('/orders', (req, res) => {
    completedOrders(req, res);
});

export default dashboardRouter;
