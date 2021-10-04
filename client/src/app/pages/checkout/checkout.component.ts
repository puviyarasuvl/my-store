import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
    orderId: number = 0;
    orderError: string = '';
    name: string = '';
    address1: string = '';
    address2: string = '';
    city: string = '';
    zip: number = 0;
    card: number = 0;
    state: string = '';

    constructor(
        private cartService: CartService,
        private route: ActivatedRoute,
        private spinnerService: NgxSpinnerService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.orderId = params.orderId;
        });
    }

    placeOrder(): void {
        this.spinnerService.show();

        this.cartService.updateStatus(this.orderId, 'placed').subscribe({
            next: (res) => {
                this.spinnerService.hide();
                this.router.navigate(['/order-success'], {
                    queryParams: {
                        name: this.name,
                        total: res.total,
                        date: res.createddate,
                    },
                });
            },
            error: (error) => {
                this.orderError = error;
                this.spinnerService.hide();
            },
        });
    }

    resetOrderError(): void {
        this.orderError = '';
    }
}
