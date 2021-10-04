import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AdminComponent } from './pages/admin/admin.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        pathMatch: 'full',
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'orders',
        component: OrdersComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'product-details',
        component: ProductDetailsComponent,
    },
    {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'order-success',
        component: OrderSuccessComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
