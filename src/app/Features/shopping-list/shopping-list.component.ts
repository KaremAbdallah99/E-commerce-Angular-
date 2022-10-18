import { Product } from './../../_model/product';
import { Component, Input, OnInit } from '@angular/core';
import { getProductPrice } from 'src/app/_utilities/utilities';
import { ProductService } from '../Product/product.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Product[] = [];
  constructor(public ps: ProductService) { }

  ngOnInit(): void {
    this.shoppingList = this.ps.shoppingList;
  }
  getPrice(product: Product) {
    return getProductPrice(product);
  }
}
