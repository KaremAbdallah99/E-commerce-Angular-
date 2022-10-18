import { Product } from 'src/app/_model/product';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getProductPrice } from 'src/app/_utilities/utilities';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  relatedProducts!: Product[];

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    let id;
    this.activatedRoute.params.subscribe((params) => {
      id = params['id'];
      this.productService.getById(id).subscribe(
        (product) => { this.product = product; }
      );
      this.relatedProducts = this.productService.relatedProduct(id);
    });
  }

  getPrice(): number {
    return getProductPrice(this.product);
  }
}
