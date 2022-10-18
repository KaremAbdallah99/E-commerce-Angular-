import { ProductService } from './../product.service';
import { getProductPrice } from 'src/app/_utilities/utilities';
import { Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/_model/product';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {
  @Input () product!: Product;
  @Output() itemAdded = new EventEmitter<Product>();
  @HostBinding('class') myClass: any;
  constructor (public ps: ProductService) {}

  ngOnInit(): void {
    this.myClass = 'item-medium-1';
  }

  getPrice(): number {
    return getProductPrice(this.product);
  }
  onItemAdding() {
      this.itemAdded.next(this.product);
      this.ps.shoppingList.push(this.product);
  }
}
