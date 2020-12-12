import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceListComponent } from './price-list/price-list.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [
  { path: 'priceList', component: PriceListComponent },
  { path: 'calculator', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
