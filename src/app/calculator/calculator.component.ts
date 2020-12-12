import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IProduct } from '../model/product';
import { ProductPriceService } from '../service/product-price.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(private productPriceService: ProductPriceService) {}

  profileForm = new FormGroup({
    productId: new FormControl('',Validators.required),
    unit: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
  });

  totalPrice: number = 0;
  products: IProduct[] = [];
  units: string [] = ['SINGLE_UNIT', 'CARTON'];

  ngOnInit(): void {
    this.productPriceService.getProductList().subscribe(data => this.products = data);
  }

  onSubmit() {
    this.productPriceService.calculatePrice(this.profileForm.value)
    .subscribe(data => this.totalPrice = data);
  }

}
