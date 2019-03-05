import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  idUsr=null;
  month=null;
  co=null;
  cargo=null;
  constructor() { }
  
  Set_usr(id){
    localStorage.setItem('idStore',id);

  }

  Get_usr(){
    return localStorage.getItem('id');
  }

  Set_month(month){
    localStorage.setItem('month',month);
    this.month=month;
  }

  Get_month(){
    return localStorage.getItem('month');
  }

  Set_Co(co){
    localStorage.setItem('co',co);
    this.co=co;
  }

  Get_Co(){
    return localStorage.getItem('co');
  }
  Set_Cargo(cargo){
    localStorage.setItem('cargo',cargo);
    this.cargo=cargo;
  }

  Get_Cargo(){
    return localStorage.getItem('cargo');
  }
}
