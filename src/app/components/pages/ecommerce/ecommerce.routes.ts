      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      
      export const admin: Routes = [
       {path:'pages/ecommerce',children:[ {
        path: 'addproduct',
        loadComponent: () =>
          import('./addproduct/addproduct.component').then((m) => m.AddproductComponent),
          title: 'YNEX - Add Product'
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./cart/cart.component').then(
            (m) => m.CartComponent
          ),
          title: 'YNEX - Cart'
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./checkout/checkout.component').then(
            (m) => m.CheckoutComponent
          ),
          title: 'YNEX - Checkout'
      },
      {
        path: 'edit-products',
        loadComponent: () =>
          import('./editproducts/editproducts.component').then((m) => m.EditproductsComponent),
          title: 'YNEX - Edit Products'
      },
      {
        path: 'orderdetails',
        loadComponent: () =>
          import('./orderdetails/orderdetails.component').then((m) => m.OrderdetailsComponent),
          title: 'YNEX - Order Details'
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./orders/orders.component').then((m) => m.OrdersComponent),
          title: 'YNEX - Orders'
      },
      {
        path: 'product-details',
        loadComponent: () =>
          import('./product-details/product-details.component').then((m) => m.ProductDetailsComponent),
          title: 'YNEX - Product Details'
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./products/products.component').then((m) => m.ProductsComponent),
          title: 'YNEX - Products'
      },
      {
        path: 'products-list',
        loadComponent: () =>
          import('./products-list/products-list.component').then((m) => m.ProductsListComponent),
          title: 'YNEX - Products List'
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./wishlist/wishlist.component').then((m) => m.WishlistComponent),
          title: 'YNEX - Wishlist'
      },
 
      
      ]}
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class ecommerceRoutingModule {
        static routes = admin;
      }