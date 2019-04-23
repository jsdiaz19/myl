import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {DataService} from '../Data/data.service'

export interface ReferenceDespacho{
  consecutive?: string;
  CoIn?: string;
  CoOut?: string;
  Date?: string;
}
@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  url='http://localhost/php/';
  Reference: ReferenceDespacho;
  today = new Date();
  constructor( private http: HttpClient, private Data: DataService ) { }

  ListStore(){
    return this.http.post('/php/starter/Listar_tiendas.php',{id: this.Data.GetCo()});
  }

  GetConsecutive(){
    return this.http.get('/php/starter/Ref_despacho.php');
  }

  GetDate(){
    return this.today.getDate().toString()+(this.today.getMonth()+1).toString()+this.today.getFullYear().toString();
  }

}
