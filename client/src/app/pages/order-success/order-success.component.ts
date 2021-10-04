import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-order-success',
    templateUrl: './order-success.component.html',
    styleUrls: ['./order-success.component.css'],
})
export class OrderSuccessComponent implements OnInit {
    name: string = '';
    date: string = '';
    total: number = 0;
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.name = params.name;
            this.date = params.date;
            this.total = params.total;
        });
    }
}
