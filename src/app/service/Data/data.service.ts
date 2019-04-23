import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  idUsr=null;
  month=null;
  //co=null;
  cargo=null;
  //nom=null;


  isActive: boolean=false;
  position: string;
  co: string;
  nom: string;
  store: string;
  constructor() { }
  
  Get_Cargo(){
    return localStorage.getItem('cargo');
  }
  

  GetNom(){
    return localStorage.getItem('nom');
  }

  GetStore(){
    return localStorage.getItem('tienda');
  }


  setData(user){
    this.isActive= true;
    this.position=user.position.trim();
    this.co=user.co.trim();
    this.idUsr=user.co.trim();
    this.nom=user.nom;
    this.store=user.store;
    localStorage.setItem('isActived','true');
    localStorage.setItem('co',this.co);
    localStorage.setItem('nom',this.nom);
    localStorage.setItem('cargo',this.position);
    localStorage.setItem('tienda',this.store);
  }

  isActived(){
    return localStorage.getItem('isActived');
  }

  Close_sesison(){
    this.isActive=false;
    this.position=undefined;
    this.co=undefined;
    this.nom=undefined;
  }

  GetCo(){
    return localStorage.getItem('co');
  }
}


