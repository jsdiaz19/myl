import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LowSalesService {

  constructor( private http: HttpClient ) { }

  LowSales(co){
    return this.http.post('/php/low-sales/LowSales.php',{co: co});
  }

  ProducBrand(brand){
    return this.http.post('/php/low-sales/Brand.php',{brand:brand});
  }
}
