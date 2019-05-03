import { Component, OnInit } from '@angular/core';
import {DeclarationImportService} from '../../service/DeclarationImport/declaration-import.service';
import { FormGroup, FormControl,FormGroupDirective,NgForm,Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatTableDataSource} from '@angular/material'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface ItemReference{
  No:  number;
  dec?: string;
};


@Component({
  selector: 'app-declaration-import',
  templateUrl: './declaration-import.component.html',
  styleUrls: ['./declaration-import.component.css']
})



export class DeclarationImportComponent implements OnInit {
  
  matcher = new MyErrorStateMatcher();
  
  form=new FormGroup({
    name: new FormControl('',Validators.required),
    number: new FormControl('',Validators.required),
    file: new FormControl('',Validators.required)
  }); 
  hidden=false;
  show=false;
  DataSource: ItemReference[]= [];
  Source= null;
  buttonDisable:Boolean= false;
  displayedColumns: string[]=['No.','Declaracion'];
  errorMessage= null;


  constructor( private http: DeclarationImportService){}

  ngOnInit(){
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if( file.name.indexOf(".pdf")==-1){
        this.errorMessage="El archivo no es permitido, solo es aceptado archivos pdf";
      }
      else{
        const formData = new FormData();
        formData.append('file',file);
        formData.append('name',this.form.controls['name'].value +".pdf");
        document.getElementById('spinner').style.display="inline";
        this.http.UploadFile(formData).subscribe((res)=>{
          this.hidden=!res;
          document.getElementById('spinner').style.display="none";
          if(!res){
            this.buttonDisable=true;
            this.form.controls['file'].setValue(true);
            this.errorMessage="El archivo se ha subido correctamente";
            
          }else{ 
            this.errorMessage=res;
            this.form.controls['file'].setValue(false);
          }
        })
      }    
    }
    else{ this.form.controls['file'].setValue(false);}
  }

  Submit(){
    document.getElementById('content').style.display="inline";
    document.getElementById('submit').style.display="none";
    for( var i=1; i<=this.form.controls['number'].value; i++){
      this.DataSource.push({No: i})
    }
    this.Source= new MatTableDataSource(this.DataSource);
    this.form.disable();
  }

  Files(){
    var actived= true;
    this.DataSource.forEach(element => {
      if( element.dec==null || element.dec=='' ){ actived=false; }
    });
    if(!actived){
      alert('Por favor, digita la informacion de todas las declaraciones');
    }
    else{ 
      document.getElementById('sub').style.display="none";
      this.http.LoadDeclaration(this.DataSource).subscribe(result=>{
        this.hidden=true;
        this.show=true;
      })
    }
  }

  UploadCsv(files: FileList){
    
    let file : File = files.item(0);
    if(files && files.length>0 && file.name.indexOf("csv")!=-1){
      let reader: FileReader = new FileReader();
      reader.readAsText(file);

      reader.onload = (e) => {
        let csv: string = reader.result.toString();
        var lines = csv.split("\n");
        var result = [];
        lines[0]=lines[0].slice(0,-1)
        var headers = lines[0].split(";");
        for (var i = 1; i < lines.length-1; i++) {
          var obj = {};
          var currentline = lines[i].slice(0,-1).split(";");
          for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
          }
          result.push(obj); 
        }
        this.http.LoadDetailDeclaration(result,this.form.controls['name'].value).subscribe(result=>{
          if( confirm("Declaracion cargada correctamente")){
            location.reload()
          }
          else{
            location.reload();
          }
        })

      }
    }
  }

}