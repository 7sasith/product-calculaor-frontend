import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IUnitPrice} from '../model/unit-price';
import {ProductPriceService} from '../service/product-price.service';
import { IProduct } from '../model/product';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  products: IProduct[] = [];
  displayedColumns: string[] = ['noOfUnits', 'price'];
  dataSource = [];
  selectedDevice: any;

  constructor(private productPriceService: ProductPriceService) { }

  ngOnInit(): void {
       this.productPriceService.getProductList().subscribe(data => this.products = data);
      //  this.productPriceService.getPriceList().subscribe(data => this.dataSource = data);
  }

  onChange(value: string){
    this.productPriceService.getPriceList(value).subscribe(data => this.dataSource = data);
  }

}
