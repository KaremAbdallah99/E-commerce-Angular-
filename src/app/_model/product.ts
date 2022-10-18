import { Tag } from './tag';
import { ProductCategory } from './product-category';
import { PaymentTypes } from './payment-types';
import { Data } from './data';

export interface Product {
  id?: number;
  data: Data[];
  imageUrls?: string[];
  price?: any;
  discount?: number;
  paymentTypes?: PaymentTypes[];
  category: ProductCategory;
  tags?: Tag[];
}
