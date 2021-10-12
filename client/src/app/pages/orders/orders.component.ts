import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';
import { CompletedOrderDetails } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
    email: string = '';
    orders: CompletedOrderDetails;
    orderJson: string = '';
    getError: string = '';

    constructor(
        private spinnerService: NgxSpinnerService,
        private cartService: CartService
    ) {
        this.orders = { userId: 'user@mystore.com', orders: [] };
    }

    ngOnInit(): void {
        this.spinnerService.show();

        this.cartService.completedOrders(this.email).subscribe({
            next: (res) => {
                this.orders = res;
                this.orderJson = JSON.stringify(res, null, 2);
                this.spinnerService.hide();
            },
            error: (error) => {
                this.getError = error;
                this.spinnerService.hide();
            },
        });
    }

    resetGetError(): void {
        this.getError = '';
    }
}
