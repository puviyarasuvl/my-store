import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
    productId: number = 0;
    product: Product;
    getError: string = '';
    quantity: number = 1;
    email: string = '';
    addedToCart: boolean = false;
    addError: string = '';

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private spinnerService: NgxSpinnerService,
        private cartService: CartService,
        public authService: AuthService
    ) {
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

        this.authService.user$.subscribe((profile) => {
            this.email = profile?.email as string;
        });

        this.route.queryParams.subscribe((params) => {
            this.productId = params.productId;
        });

        this.productService.getProductById(this.productId).subscribe({
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

    addProductToCart(product: Product): void {
        const productId = product.id as number;

        this.spinnerService.show();

        this.cartService
            .addProductToCart(productId, this.quantity, this.email as string)
            .subscribe({
                next: (_res) => {
                    this.addedToCart = true;
                    this.spinnerService.hide();
                },
                error: (error) => {
                    this.addError = error;
                    this.spinnerService.hide();
                },
            });

        this.quantity = 1;
    }

    resetGetError(): void {
        this.getError = '';
    }

    addToCartSuccess(): void {
        this.addedToCart = true;
    }

    resetAddedToCart(): void {
        this.addedToCart = false;
    }

    addToCartError(error: string): void {
        this.addError = error;
    }

    resetAddError(): void {
        this.addError = '';
    }
}
