import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-delete-product',
    templateUrl: './delete-product.component.html',
    styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent implements OnInit {
    products: Product[] = [];
    getError: string = '';
    deleteError: string = '';
    deleteSuccess: string = '';

    constructor(
        private productService: ProductService,
        private spinnerService: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this.spinnerService.show();
        this.productService.getProducts().subscribe({
            next: (res) => {
                this.products = res;
                this.spinnerService.hide();
            },
            error: (error) => {
                this.getError = error.message;
                this.spinnerService.hide();
            },
        });
    }

    resetGetError(): void {
        this.getError = '';
    }

    resetDeleteError(): void {
        this.deleteError = '';
    }

    resetDeleteSuccess(): void {
        this.deleteSuccess = '';
    }

    deleteProduct(product: Product): void {
        this.spinnerService.show();
        this.productService.deleteProduct(product).subscribe({
            next: (_res) => {
                this.deleteSuccess = 'Product deleted successfully.!';
                this.getProducts();
                this.spinnerService.hide();
            },
            error: (error) => {
                this.deleteError = error.message;
                this.getProducts();
                this.spinnerService.hide();
            },
        });
    }
}
