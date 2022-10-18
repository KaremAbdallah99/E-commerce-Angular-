import { ProductService } from './product.service';
import { Injectable } from '@angular/core';
import { Product } from './../../_model/product';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class ProductsResolver implements Resolve<Product[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> | Promise<Product[]> | Product[] {
    return this.productService.getAll();
  }

  constructor(private productService: ProductService){}
}


