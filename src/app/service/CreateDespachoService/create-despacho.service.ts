import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateDespachoService {

  constructor( private http: HttpClient) { }

  GetReference(cod){
    return this.http.post('/php/starter/Get_reference.php',{cod: cod})
  }

  SaveBox(id,num,product){
    return this.http.post('/php/starter/Save_box.php',{id: id, box: num, content: JSON.stringify(product)}).subscribe(result => {
      console.log('Box save');
    })
  }

  SendEmail(store,Numproduct,ref,guide,company){
    return this.http.post('/php/starter/Send.php',{ store: store.trim(),Numproduct: Numproduct,ref: ref,guide:guide,company:company });
  }

  Save(id,store){
    return this.http.post('/php/starter/register.php',{id: id, store: store}).subscribe(result =>{
      console.log(result);
    })
  }
}
