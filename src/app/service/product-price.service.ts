import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IUnitPrice} from '../model/unit-price';
import {Observable} from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class ProductPriceService {

  constructor(private http: HttpClient) {
  }

  getPriceList(): Observable<IUnitPrice[]> {
    return this.http.get<IUnitPrice[]>('http://localhost:8080/api/v1/product/1/priceList');
  }
}
