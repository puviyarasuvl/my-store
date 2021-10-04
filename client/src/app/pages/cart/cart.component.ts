import { Component, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from '@auth0/auth0-angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductCart } from 'src/app/models/product';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    cart: OrderDetails;
    email: string = '';
    getError: string = '';
    updateError: string = '';
    newQuantity: number = 0;
    productId: number = 0;
    cartLoaded: boolean = false;

    constructor(
        private cartSerivce: CartService,
        public authService: AuthService,
        private spinnerService: NgxSpinnerService
    ) {
        this.cart = {
            orderId: 0,
            createdDate: '',
            orderStatus: '',
            products: [
                {
                    productId: 0,
                    quantity: 0,
                },
            ],
            total: 0,
            userId: '',
        };
    }

    ngOnInit(): void {
        this.spinnerService.show();

        this.authService.user$.subscribe((profile) => {
            this.email = profile?.email as string;

            this.spinnerService.hide();

            this.showCart();
        });
    }

    showCart(): void {
        this.spinnerService.show();

        this.cartSerivce.showCart(this.email).subscribe({
            next: (res) => {
                this.cart = res;

                this.cartLoaded = true;
                this.spinnerService.hide();
            },
            error: (error) => {
                this.getError = error.message;
                this.spinnerService.hide();
            },
        });
    }

    resetUpdateError(): void {
        this.updateError = '';
    }

    updateQuantity(productCart: ProductCart) {
        this.spinnerService.show();

        if (productCart.quantity === 0) {
            this.cartSerivce.removeProduct(this.email, productCart).subscribe({
                next: (_res) => {
                    this.showCart();
                    this.spinnerService.hide();
                },
                error: (error) => {
                    this.updateError = error.message;
                    this.spinnerService.hide();
                },
            });
        } else {
            this.cartSerivce.updateQuantity(this.email, productCart).subscribe({
                next: (_res) => {
                    this.showCart();
                    this.spinnerService.hide();
                },
                error: (error) => {
                    this.updateError = error.message;
                    this.spinnerService.hide();
                },
            });
        }
    }

    removeProduct(productCart: ProductCart) {
        this.spinnerService.show();
        this.cartSerivce.removeProduct(this.email, productCart).subscribe({
            next: (_res) => {
                this.showCart();
                this.spinnerService.hide();
            },
            error: (error) => {
                this.updateError = error.message;
                this.spinnerService.hide();
            },
        });
    }
}
