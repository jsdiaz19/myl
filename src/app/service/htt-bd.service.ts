import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class HttBDService {
  url='http://localhost/php/'
  constructor(private http: HttpClient, private router: Router) {}
  
  SearchUser(user){
    return this.http.post('/php/conexion.php',{ op: 'usuario', nom: user.usuario, password: user.password })
    .subscribe(result => {
      if (result=="Administrador"){
        this.router.navigate(['section-aux']);
      }
  });
  }

  Search(nom){
    return this.http.post('/php/SearchId.php',{op: 'store', name: nom})
  }

  Store(){
    return this.http.get('/php/Listar_tiendas.php');
  }

  Cod_Store(){
    return this.http.get('/php/Cod_Store.php');
  }

  Changeid(){
    return this.http.get('/php/Ref_despacho.php');
  }

  Save(id,store){
    return this.http.post('/php/register.php',{id: id, store: store}).subscribe(result =>{
    })
  }

  Get_reference(cod){
    return this.http.post('/php/Get_reference.php',{cod: cod})
  }
  
  Save_box(id,num,product){
    return this.http.post('/php/Save_box.php',{id: id, box: num, content: JSON.stringify(product.toString() )}).subscribe(result =>{
      console.log(result);
    })
  }

  Send_email(ref,num,summary,product,guide,company){
    return this.http.post('/php/Send.php',{ Ref: ref, product: num, abstract: summary, despacho: product, guide: guide, company: company }).subscribe(result => {
      console.log(result)
    })
  }

  Get_transport(){
    return this.http.get('/php/Get_transport.php');
  }

  Get_Despacho(){
    return this.http.get('/php/Get_despacho.php');
  }

  Update_state(id, state){
    return this.http.post('/php/Update.php',{id: id,state: state}).subscribe(result =>{
      console.log('actualizo');
    })
  }
}

