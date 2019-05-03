import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormGroupDirective,NgForm,Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {DeclarationImportService} from '../../service/DeclarationImport/declaration-import.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-view-declaration',
  templateUrl: './view-declaration.component.html',
  styleUrls: ['./view-declaration.component.css']
})
export class ViewDeclarationComponent implements OnInit {
  form=new FormGroup({
    type: new FormControl('',Validators.required),
    ref: new FormControl('',Validators.required)
  }); 

  constructor( private http: DeclarationImportService ) { }

  ngOnInit() {
  }

  Download(){
    this.http.DownloadDeclaration(this.form.controls['type'].value, this.form.controls['ref'].value).subscribe(result=>{
      document.getElementById('download').style.display="inline";  
      document.getElementById('download').setAttribute('href',"http://192.168.0.99/php/uploads/"+result.toString().trim()+".pdf");
    })
  }
}
