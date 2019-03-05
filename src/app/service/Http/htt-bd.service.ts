import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {DataService} from '../Data/data.service'
import { Router } from '@angular/router'
import { compileBaseDefFromMetadata } from '@angular/compiler';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
@Injectable({
  providedIn: 'root'
})
export class HttBDService {
  url='http://localhost/php/'
  idUsr=null;
  nom=null;
  cargo=null;
  constructor(private http: HttpClient, private Data: DataService, private router: Router) {}
  
  SearchUser(user){
    return this.http.post('/php/conexion.php',{ op: 'usuario', nom: user.usuario, password: user.password }).subscribe(result => {
      if (result!="Incorrect"){
        localStorage.setItem('auth','true');
        this.idUsr=result[0];
        this.Data.Set_usr(this.idUsr);
        this.nom=result[1];
        localStorage.setItem('id',this.idUsr);
        this.cargo=result[2];
        localStorage.setItem('cargo',this.cargo);
        this.Data.Set_Cargo(this.cargo);
        if(this.cargo=='Contable'){
          this.router.navigate(['/lists']);
        }
        else{
          this.router.navigate(['/starter']);
        }
      }
    });
  }

  ////////////////////////////////////////// page create-despacho ///////////////////////////////////////////////////////////////////

  Store(id){
    return this.http.post('/php/starter/Listar_tiendas.php',{id: id});
  }

  Changeid(){
    return this.http.get('/php/starter/Ref_despacho.php');
  }

  Get_reference(cod){
    return this.http.post('/php/starter/Get_reference.php',{cod: cod})
  }

  Save_box(id,num,product){
    return this.http.post('/php/starter/Save_box.php',{id: id, box: num, content: JSON.stringify(product)}).subscribe(result => {
      console.log('Box save');
    })
  }

  Send_email(store,Numproduct,ref,guide,company){
    return this.http.post('/php/starter/Send.php',{ store: store,Numproduct: Numproduct,ref: ref,guide:guide,company:company }).subscribe(result => {
      console.log(result);
    });
  }
  
  Save(id,store){
    return this.http.post('/php/starter/register.php',{id: id, store: store}).subscribe(result =>{
      console.log(result);
    })
  }
  
//////////////////////////////// page create-despacho ///////////////////////////////////////////////////////////////////

////////////////////////////////  page dialog //////////////////////////////////////////////////////////////////////////


Get_transport(){
  return this.http.get('/php/starter/dialog/Get_transport.php');
}

Update_state(id, state,company,guide){
  return this.http.post('/php/starter/dialog/Update.php',{id: id,state: state, company: company, guide: guide}).subscribe(result =>{
    console.log(result);
  })
}

////////////////////////////////  page dialog //////////////////////////////////////////////////////////////////////////


////////////////////////////////  view despacho //////////////////////////////////////////////////////////////////////////

Cod_Store(){
  return this.http.get('/php/View-despacho/Cod_Store.php');
}

Get_Despacho(store){
  return this.http.post('/php/View-despacho/Get_despacho.php',{store:store});
}

////////////////////////////////  view despacho //////////////////////////////////////////////////////////////////////////


////////////////////////////////  check despacho //////////////////////////////////////////////////////////////////////////

UnidadBox(ref,caja){
  return this.http.post('/php/check-despacho/UnidadCaja.php',{ref: ref, caja: caja});
}

UpdateBox(ref){
  return this.http.post('/php/check-despacho/UpdateBox.php',{ref: ref}).subscribe(result =>{
    console.log(result);
  });
}

////////////////////////////////  check despacho //////////////////////////////////////////////////////////////////////////

////////////////////////////////  anomaly despacho //////////////////////////////////////////////////////////////////////////

Anomaly(ref,inv,descript){
  return this.http.post('/php/check-despacho/dialog/Anomaly.php',{ref: ref, inv: inv,descript: descript});
}
////////////////////////////////  anomaly despacho //////////////////////////////////////////////////////////////////////////

////////////////////////////////  LIST (BUDGET) //////////////////////////////////////////////////////////////////////////

BudgetStore(){
  return this.http.get('/php/budget/BudgetStore.php');
}

////////////////////////////////  LIST (BUDGET) //////////////////////////////////////////////////////////////////////////


////////////////////////////////  budget detail  //////////////////////////////////////////////////////////////////////////

BudgetSale(co,month){
  return this.http.post('/php/budget/budget-detail/BudgetSale.php',{co: co, month: month});
}

BudgetSale_Week(co,month){
  return this.http.post('/php/budget/budget-detail/BudgetSale_Week.php',{co: co, month: month});
}

BudgetSellerWeek(co,month){
  return this.http.post('/php/budget/budget-detail/BudgetSellerWeek.php',{co: co, month: month});
}

BudgetSeller(co,month){
  return this.http.post('/php/budget/budget-detail/BudgetSeller.php',{co: co, month: month});
}

////////////////////////////////  budget detail  //////////////////////////////////////////////////////////////////////////

////////////////////////////////  low product sales  //////////////////////////////////////////////////////////////////////////

LowSales(){
  return this.http.get('/php/low-sales/LowSales.php');
}

ProducBrand(){
  return this.http.get('/php/low-sales/Brand.php');
}

////////////////////////////////  low product sales  //////////////////////////////////////////////////////////////////////////

////////////////////////////////  upload csv  //////////////////////////////////////////////////////////////////////////

UpdateBudget(budget){
  return this.http.post('/php/budget/upload-csv/UpdateBudget.php',budget);
}

////////////////////////////////  upload csv  //////////////////////////////////////////////////////////////////////////

  AuthLogin(){
    return localStorage.getItem('auth');
  }

  Search(nom){
    return this.http.post('/php/SearchId.php',{op: 'store', name: nom})
  }
  
  

///////////////////////////////// report store //////////////////////////////////////////////////////////

  ReportStore(co,tipo,price,Fact,date,init,state,Anomaly){
    return this.http.post('/php/report-store/ReportStore.php',{co: co, tipo: tipo, fact: Fact,date:date, price: JSON.stringify(price), init: init,state:state, anomaly:Anomaly });
  }

  LastDate(co){
    return this.http.post('/php/report-store/LastDate.php',{co: co});
  }

  ///////////////////////////////// report store /////////////////////////////////////////////////////////////////////////

  ///////////////////////////////// goal budget /////////////////////////////////////////////////////////////////////////

  Budget(year){
    return this.http.post('/php/goal-budget/Get-budget.php',{year:year});
  }

  BudgetMonth(year){
    return this.http.post('/php/goal-budget/BudgetMonth.php',{year:year});
  } 

  BudgetWeek(year,month){
    return this.http.post('/php/goal-budget/BudgetWeek.php',{year:year, month: month});
  }

 ///////////////////////////////// goal budget /////////////////////////////////////////////////////////////////////////

   ///////////////////////////////// cost-effectiveness /////////////////////////////////////////////////////////////////////////

  Cost(current,before){
    return this.http.post('/php/Cost-effectiveness/cost-effectiveness.php',{current:current, before:before});
  }

   ///////////////////////////////// cost-effectiveness /////////////////////////////////////////////////////////////////////////

   
   ///////////////////////////////// Balance  /////////////////////////////////////////////////////////////////////////

   View_report(){
     return this.http.get('/php/balance/View_report.php');
   }

   Main_box(co,date){
    return this.http.post('/php/balance/Main_box.php',{co:co,date:date});
  }

  Contigencebox(co,date){
    return this.http.post('/php/balance/Contigencebox.php',{co:co,date:date});
  }
  Manuallybox(co,date){
    return this.http.post('/php/balance/Manuallybox.php',{co:co,date:date});
  }
  Abstract(co,date){
    return this.http.post('/php/balance/abstract.php',{co:co,date:date});
  }
}

