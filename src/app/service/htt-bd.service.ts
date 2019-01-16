import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router'
import { compileBaseDefFromMetadata } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class HttBDService {
  url='http://localhost/php/'
  idUsr=null;
  nom=null;
  constructor(private http: HttpClient, private router: Router) {}
  
  SearchUser(user){
    return this.http.post('/php/conexion.php',{ op: 'usuario', nom: user.usuario, password: user.password })
    .subscribe(result => {
      if (result!="Incorrect"){
        this.idUsr=result[0];
        this.nom=result[1];
        localStorage.setItem('id',this.idUsr);
        this.router.navigate(['/starter']);
      }
  });
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
      console.log('email send');
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
}

