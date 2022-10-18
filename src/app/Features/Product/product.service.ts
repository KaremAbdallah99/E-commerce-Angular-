import { map, Observable, Subject} from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Product } from "src/app/_model/product";
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  shoppingList: Product[] = [];
  products: Product[] = [];
  productsChanged!: Subject<Product[]>;

  constructor(private http: HttpClient) {
    this.productsChanged = new Subject<Product[]>();
  }

  getAll() : Observable<Product[]> {
    return this.http.get<Product[]>('https://localhost:44396/api/Products').pipe(map(
      (products) => {
        this.products = products;
        this.productsChanged.next(products);
        return products; }
    ));
   // return this.productsChanged;
  }
  getById(id: number) : Observable<Product> {
    return this.http.get<Product>(`https://localhost:44396/api/Products/${+id}`);
  }
  add(product: Product) {
    product.id = this.products.length + 1;
    return this.products.push(product);
  }
  save(product: Product): Observable<boolean> {
    return this.http.put<boolean>('https://localhost:44396/api/Products', product).pipe(map(
      (isSaved) => {
        if (isSaved) {
          const index = this.products.findIndex(a => a.id === product.id);
          this.products[index] = product;
          this.productsChanged.next(this.products);
        }
        return isSaved;
      }
    ));
  }
  delete(id: number) {
    id = +id;
    const index = this.products.findIndex(a => a.id === id);
    return this.products.splice(index, 1);
  }
  relatedProduct(id: number) {
    return this.products.slice(5, 9);
  }
}

