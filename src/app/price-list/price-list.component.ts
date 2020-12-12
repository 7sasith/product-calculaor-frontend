import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IUnitPrice} from '../model/unit-price';
import {ProductPriceService} from '../service/product-price.service';

const ELEMENT_DATA: IUnitPrice[] = [
  {noOfUnits: 1,  price: 1.0079},
  {noOfUnits: 2,  price: 4.0026},
  {noOfUnits: 3,  price: 6.941},
  {noOfUnits: 4,  price: 9.0122},
  {noOfUnits: 5,  price: 10.811},
  {noOfUnits: 6,  price: 12.0107},
  {noOfUnits: 7,  price: 14.0067},
  {noOfUnits: 8,  price: 15.9994},
  {noOfUnits: 9,  price: 18.9984},
  {noOfUnits: 10, price: 20.1797},
];

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  displayedColumns: string[] = ['noOfUnits', 'price'];
  dataSource = ELEMENT_DATA;

  constructor(private productPriceService: ProductPriceService) { }

  ngOnInit(): void {
       this.productPriceService.getPriceList().subscribe(data => this.dataSource = data);
  }

}
