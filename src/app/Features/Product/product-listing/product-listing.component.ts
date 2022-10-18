import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  @Input() products!: Product[];
  @Output() oneItemAdded = new EventEmitter<Product>();
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() : void {
    if (!this.products) {
      this.products = this.activatedRoute.snapshot.data['reProducts'];
      this.productService.getAll().subscribe(
        (products) => { this.products = products; }
      )
  }
}
  onOneItemAdded(pro: Product) {
    this.oneItemAdded.next(pro);
    }
}
