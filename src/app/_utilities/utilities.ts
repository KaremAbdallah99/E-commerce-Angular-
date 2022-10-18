import { Product } from './../_model/product';

export function getProductPrice(product: Product): number {
  return product.discount ? product.price - product.discount : product.price;
}
