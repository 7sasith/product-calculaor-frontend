import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IUnitPrice} from '../model/unit-price';
import {Observable} from 'rxjs/observable';
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductPriceService {

  constructor(private http: HttpClient) {
  }

  getPriceList(id: string): Observable<IUnitPrice[]> {
    return this.http.get<IUnitPrice[]>('http://localhost:8080/api/v1/product/'+id+'/priceList');
  }

  getProductList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:8080/api/v1/product');
  }
}
