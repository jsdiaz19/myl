import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {DataService} from '../Data/data.service'
import { Router } from '@angular/router'
import { compileBaseDefFromMetadata } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class HttBDService {
  url='http://localhost/php/'
  idUsr=null;
  nom=null;
  constructor(private http: HttpClient, private Data: DataService, private router: Router) {}
  
  SearchUser(user){
    return this.http.post('/php/conexion.php',{ op: 'usuario', nom: user.usuario, password: user.password }).subscribe(result => {
      if (result!="Incorrect"){
        localStorage.setItem('auth','true');
        this.idUsr=result[0];
        this.Data.Set_usr(this.idUsr);
        this.nom=result[1];
        localStorage.setItem('id',this.idUsr);
        this.router.navigate(['/starter']);
      }
    });
  }
  
  AuthLogin(){
    return localStorage.getItem('auth');
  }

  Search(nom){
    return this.http.post('/php/SearchId.php',{op: 'store', name: nom})
  }

  Store(id){
    return this.http.post('/php/Listar_tiendas.php',{id: id});
  }

  Cod_Store(){
    return this.http.get('/php/Cod_Store.php');
  }

  Changeid(){
    return this.http.get('/php/Ref_despacho.php');
  }

  Save(id,store){
    return this.http.post('/php/register.php',{id: id, store: store}).subscribe(result =>{
      console.log(result);
    })
  }

  Get_reference(cod){
    return this.http.post('/php/Get_reference.php',{cod: cod})
  }
  
  Save_box(id,num,product){
    return this.http.post('/php/Save_box.php',{id: id, box: num, content: JSON.stringify(product)}).subscribe(result => {
      console.log('Box save');
    })
  }

  Send_email(store,Numproduct,ref,guide,company){
    return this.http.post('/php/Send.php',{ store: store,Numproduct: Numproduct,ref: ref,guide:guide,company:company }).subscribe(result => {
      console.log(result);
    });
  }

  Get_transport(){
    return this.http.get('/php/Get_transport.php');
  }

  Get_Despacho(store){
    return this.http.post('/php/Get_despacho.php',{store:store});
  }

  Update_state(id, state,company,guide){
    return this.http.post('/php/Update.php',{id: id,state: state, company: company, guide: guide}).subscribe(result =>{
      console.log(result);
    })
  }

  UnidadBox(ref,caja){
    return this.http.post('/php/UnidadCaja.php',{ref: ref, caja: caja});
  }

  UpdateBox(ref){
    return this.http.post('/php/UpdateBox.php',{ref: ref}).subscribe(result =>{
      console.log(result);
    });
  }

  Anomaly(ref,inv,descript){
    return this.http.post('/php/Anomaly.php',{ref: ref, inv: inv,descript: descript});
  }

  Budget(store){
    return this.http.post('/php/Get-budget.php',{id: store});
  }

  UpdateBudget(budget){
    return this.http.post('/php/UpdateBudget.php',budget);
  }

  BudgetSale(co,month){
    return this.http.post('/php/BudgetSale.php',{co: co, month: month});
  }

  BudgetSale_Week(co,month){
    return this.http.post('/php/BudgetSale_Week.php',{co: co, month: month});
  }
  
  BudgetSellerWeek(co,month){
    return this.http.post('/php/BudgetSellerWeek.php',{co: co, month: month});
  }

  BudgetSeller(co,month){
    return this.http.post('/php/BudgetSeller.php',{co: co, month: month});
  }

  LowSales(){
    return this.http.get('/php/LowSales.php');
  }

  BudgetStore(){
    return this.http.get('/php/BudgetStore.php');
  }

  ProducBrand(){
    return this.http.get('/php/Brand.php');
  }

  ReportStore(co,tipo,price,Fact,date){
    return this.http.post('/php/ReportStore.php',{co: co, tipo: tipo, fact: Fact,date:date, price: JSON.stringify(price)});
  }

  LastDate(co){
    return this.http.post('/php/LastDate.php',{co: co});
  }
}

