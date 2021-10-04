import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms';
import { environment as env } from 'src/environments/environment';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './pages/profile/profile.component';
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
        LoginButtonComponent,
        LogoutButtonComponent,
        SignupButtonComponent,
        AuthenticationButtonComponent,
        AuthNavComponent,
        LoadingComponent,
        FooterComponent,
        ProfileComponent,
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
        AuthModule.forRoot({
            ...env.auth,
            httpInterceptor: {
                allowedList: [
                    `${env.dev.serverUrl}/api/products/addProduct`,
                    `${env.dev.serverUrl}/api/products/deleteProduct/*`,
                    `${env.dev.serverUrl}/api/orders/addProduct`,
                    `${env.dev.serverUrl}/api/orders/updateQty`,
                    `${env.dev.serverUrl}/api/orders/updateStatus`,
                    `${env.dev.serverUrl}/api/orders/removeProduct/*`,
                    `${env.dev.serverUrl}/api/dashboard/cart`,
                    `${env.dev.serverUrl}/api/dashboard/orders`,
                ],
            },
        }),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
