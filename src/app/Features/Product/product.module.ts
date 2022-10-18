import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ColorDirective } from '../color.directive';
import { ProductsResolver } from './products.resolver';


@NgModule({
  declarations: [
    ProductListingComponent,
    ProductItemsComponent,
    ProductAddComponent,
    ProductDetailsComponent,
    ColorDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'product-listing', component: ProductListingComponent, resolve: {reProducts: ProductsResolver}},
      {path: 'product-add', component: ProductAddComponent},
      {path: 'product-edit/:id', component: ProductAddComponent},
      {path: 'product-details/:id', component: ProductDetailsComponent}
    ])
  ],
  providers: [],
  exports: [ RouterModule ]
})
export class ProductModule { }
