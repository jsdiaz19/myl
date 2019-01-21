import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  idUsr=null;
  constructor() { }
  
  Set_usr(id){
    localStorage.setItem('idStore',id);
    this.idUsr=id;
  }

  Get_usr(){
    return this.idUsr;
  }
}
