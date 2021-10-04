import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product, ProductCart } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
    @Input() productCart: ProductCart;
    @Output() qty = new EventEmitter();
    @Output() removeItem = new EventEmitter();

    product: Product;
    getError: string = '';

    constructor(
        private productService: ProductService,
        private spinnerService: NgxSpinnerService
    ) {
        this.productCart = {
            productId: 0,
            quantity: 0,
        };

        this.product = {
            name: '',
            price: 0,
            category: '',
            description: '',
            url: '',
        };
    }

    ngOnInit(): void {
        this.spinnerService.show();

        this.productService
            .getProductById(this.productCart.productId)
            .subscribe({
                next: (res) => {
                    this.product = res;

                    this.spinnerService.hide();
                },
                error: (error) => {
                    this.getError = error;
                    this.spinnerService.hide();
                },
            });
    }
}
