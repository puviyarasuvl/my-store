import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
    CompletedOrderDetails,
    Order,
    OrderDetails,
    OrderProduct,
} from '../models/order';
import { environment as env } from 'src/environments/environment';
import { ProductCart } from '../models/product';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor(private httpClient: HttpClient) {}

    addProductToCart(
        productId: number,
        quantity: number,
        userId: string
    ): Observable<OrderProduct> {
        const body = {
            productId: productId,
            quantity: quantity,
            userId: userId,
        };

        return this.httpClient.post<OrderProduct>(
            `${env.dev.serverUrl}/api/orders/addProduct`,
            body
        );
    }

    showCart(userId: string): Observable<OrderDetails> {
        return this.httpClient.get<OrderDetails>(
            `${env.dev.serverUrl}/api/dashboard/cart`,
            { params: { userID: userId } }
        );
    }

    updateQuantity(
        userId: string,
        productCart: ProductCart
    ): Observable<OrderProduct> {
        const body = {
            productId: productCart.productId,
            quantity: productCart.quantity,
            userId: userId,
        };

        return this.httpClient.patch<OrderProduct>(
            `${env.dev.serverUrl}/api/orders/updateQty`,
            body
        );
    }

    removeProduct(
        userId: string,
        productCart: ProductCart
    ): Observable<string> {
        return this.httpClient.delete<string>(
            `${env.dev.serverUrl}/api/orders/removeProduct/${productCart.productId}/${userId}`
        );
    }

    updateStatus(orderId: number, status: string): Observable<Order> {
        const body = {
            orderId: orderId,
            status: status,
        };
        return this.httpClient.patch<Order>(
            `${env.dev.serverUrl}/api/orders/updateStatus`,
            body
        );
    }

    completedOrders(userId: string): Observable<CompletedOrderDetails> {
        return this.httpClient.get<CompletedOrderDetails>(
            `${env.dev.serverUrl}/api/dashboard/orders`,
            { params: { userId: userId } }
        );
    }
}
