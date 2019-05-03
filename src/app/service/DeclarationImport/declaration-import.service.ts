import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeclarationImportService {

  constructor( private http: HttpClient ) { }

  UploadFile(data){
    let url="/php/Declaration/Upload.php";
    return this.http.post<any>(url,data);
  }

  LoadDeclaration(data){
    return this.http.post("/php/Declaration/LoadDeclaration.php",{data: JSON.stringify(data)});
  }

  LoadDetailDeclaration(data,project){
    return this.http.post("/php/Declaration/LowDetailDeclaration.php",{data: JSON.stringify(data), project: project});
  }

  DownloadDeclaration(type,id){
    return this.http.post("/php/Declaration/test.php",{type: type, id: id});
  }
}
