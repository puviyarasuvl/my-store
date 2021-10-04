import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
    name: string = '';
    price: number = 0;
    category: string = '';
    desc: string = '';
    url: string = '';
    postError: string = '';
    postSuccess: boolean = false;

    constructor(
        private productService: ProductService,
        private spinnerService: NgxSpinnerService
    ) {}

    ngOnInit(): void {}

    addProduct(): void {
        const newProduct: Product = {
            name: this.name,
            price: this.price,
            category: this.category,
            description: this.desc,
            url: this.url,
        };

        this.spinnerService.show();

        this.productService.addProduct(newProduct).subscribe({
            next: (_res) => {
                this.postSuccess = true;
                this.spinnerService.hide();
            },
            error: (error) => {
                this.postError = error.message;
                this.spinnerService.hide();
            },
        });

        this.name = '';
        this.price = 0;
        this.category = '';
        this.desc = '';
        this.url = '';
    }

    resetPostSuccess(): void {
        this.postSuccess = false;
    }

    resetPostError(): void {
        this.postError = '';
    }
}
