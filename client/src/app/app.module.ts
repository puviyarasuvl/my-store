import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductComponent } from './components/product/product.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        MainNavComponent,
        LoadingComponent,
        FooterComponent,
        ProductsComponent,
        CartComponent,
        OrdersComponent,
        ProductComponent,
        AdminComponent,
        AddProductComponent,
        DeleteProductComponent,
        ProductDetailsComponent,
        CartItemComponent,
        CheckoutComponent,
        OrderSuccessComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
