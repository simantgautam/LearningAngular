import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'product', title: 'Product', component: ProductComponent },
  {
    path: 'product',
    children: [
      {
        path: 'productDetail/:id',
        title: 'Product | Product Detail',
        component: ProductDetailsComponent,
      },
    ],
  },
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent },
];
