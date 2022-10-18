import { ProductService } from './../product.service';
import { ProductCategory } from './../../../_model/product-category';
import { PaymentTypeService } from './../../payment-type/payment-type.service';
import { ProductCategoryService } from './../../product-category/product-category.service';
import { LangService } from './../../lang/lang.service';
import { Lang } from './../../../_model/lang';
import { Product } from 'src/app/_model/product';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PaymentTypes } from 'src/app/_model/payment-types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  langs: Lang[] = [];
  myForm: FormGroup = new FormGroup({});
  price: FormControl = new FormControl();
  discount: FormControl = new FormControl('', [Validators.max(30), Validators.required]);
  paymentsType: PaymentTypes[] = [];
  productCategories: ProductCategory[] = [];
  product: Product = {data: [], category: {}};
  currentLang = 0;
  productId?: number;

  constructor(private productService: ProductService,
              private langService: LangService,
              private categoryService: ProductCategoryService,
              private paymentTybe: PaymentTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.langs = this.langService.getAll();
    this.paymentsType = this.paymentTybe.getAll();
    this.productCategories = this.categoryService.getAll();

    this.myForm = new FormGroup({
      data: new FormArray(this.getLang()),
      imageUrls: new FormArray([]),
      price: this.price,
      discount: this.discount,
      paymentTypes: new FormArray([]),
      category: new FormControl(),
      tags: new FormArray([])
    })









//    this.productId = +this.activatedRoute.snapshot.params['id'];
//    if (this.productId) {
//      this.product = this.productService.getById(this.productId);
//   } else {
//      this.product.category = {};
//      this.product.paymentTypes = [];
//      this.product.tags = [];
//      this.product.data = [];
//      for (const lang of this.langs) {
//        this.product.data.push({});
//      }
//    }
  }
  maxValidation(max: number) : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let result: ValidationErrors | null = null;
      if (+control.value > max) {
        result = {max: true};
      }
      return result;
    }
  }
  compareValidation(control1Name: string, control2Name: string) : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let result: ValidationErrors | null;
      const group = control as FormGroup;
      const control1 = group.get('password');
      const control2 = group.get('confPassword');
      if (control1?.value === control2?.value) {
        result = null;
      } else {
        result = {invalid: true};
      }
      return result;
    }
  }
  get tags() {
    return this.myForm.get('tags') as FormArray;
  }
  getLang() : AbstractControl[] {
    const result: AbstractControl[] = [];
    for (const lang of this.langs) {
      result.push(new FormGroup({
        title: new FormControl(),
        description: new FormControl()}));
    }
    return result;
  }
  onSubmit() {
    console.log(this.myForm);
    let product: Product;
    product = this.myForm.getRawValue();
    if (this.myForm.valid === true) {
      this.productService.add(this.product);
      this.router.navigate(['/product-listing']);
    }
  }
  onPaymentTypeChecked(event: MouseEvent) {
    const checkbox = (event.target as HTMLInputElement);
    const id = +checkbox.value;
    const paymentType = this.myForm.get('paymentTypes') as FormArray;
    if(checkbox.checked) {
      paymentType.push(new FormControl(id));
  //    this.product.paymentTypes?.push({id});
    }
    else  {
      const index = paymentType.controls.findIndex(a => a.value === id);
      paymentType.controls.splice(index, 1);
    }

  }
  onAddTag(txtTag: HTMLInputElement) {
    this.tags.controls.push(new FormControl(txtTag.value));
//  this.product.tags?.push({title: txtTag.value});
    txtTag.value = '';
  }
  get imageUrls() {
    return this.myForm.get('imageUrls') as FormArray;
  }
}
