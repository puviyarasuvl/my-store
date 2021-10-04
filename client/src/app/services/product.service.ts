import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { environment as env } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private httpClient: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(
            `${env.dev.serverUrl}/api/products/getProduct`
        );
    }

    getProductById(productId: number): Observable<Product> {
        return this.httpClient.get<Product>(
            `${env.dev.serverUrl}/api/products/getProduct/${productId}`
        );
    }

    addProduct(newProduct: Product): Observable<Product> {
        const body = {
            productName: newProduct.name,
            price: newProduct.price,
            category: newProduct.category,
            description: newProduct.description,
            url: newProduct.url,
        };

        return this.httpClient.post<Product>(
            `${env.dev.serverUrl}/api/products/addProduct`,
            body
        );
    }

    deleteProduct(product: Product): Observable<string> {
        return this.httpClient.delete<string>(
            `${env.dev.serverUrl}/api/products/deleteProduct/${product.id}`
        );
    }
}
