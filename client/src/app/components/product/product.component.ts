import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
    @Input() product: Product;
    @Output() addToCartSuccess = new EventEmitter();
    @Output() addToCartError = new EventEmitter();
    quantity: number = 1;
    email: string | undefined = 'user@mystore.com';

    constructor(
        private cartService: CartService,
        private spinnerService: NgxSpinnerService
    ) {
        this.product = {
            name: '',
            price: 0,
            category: '',
            description: '',
            url: '',
        };
    }

    ngOnInit(): void {}

    addProductToCart(product: Product): void {
        const productId = product.id as number;

        this.spinnerService.show();

        this.cartService
            .addProductToCart(productId, this.quantity, this.email as string)
            .subscribe({
                next: (_res) => {
                    this.addToCartSuccess.emit();
                    this.spinnerService.hide();
                },
                error: (error) => {
                    this.addToCartError.emit(error.message);
                    this.spinnerService.hide();
                },
            });

        this.quantity = 1;
    }
}
