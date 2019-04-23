import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor( private http: HttpClient) { }

  UnidadBox(ref,caja){
    return this.http.post('/php/check-despacho/UnidadCaja.php',{ref: ref, caja: caja});
  }

  UpdateBox(ref){
    return this.http.post('/php/check-despacho/UpdateBox.php',{ref: ref}).subscribe(result =>{
      console.log(result);
    });
  }
}
