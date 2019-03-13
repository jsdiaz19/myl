import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormGroupDirective,NgForm,Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { HttBDService} from '../../../../service/Http/htt-bd.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  Form = new FormGroup({
    nom: new FormControl('',Validators.required),
    cc: new FormControl('',Validators.required),
    idVend: new FormControl('',Validators.required)
  });

  constructor(private HttpBD: HttBDService,public dialogRef: MatDialogRef<NewUserComponent>) { }

  ngOnInit() {
  }

  Validate(){
    if(this.Form.invalid){
      alert("Por favor digite todos los campos");
    }
    else{
      this.HttpBD.New_User(this.Form.controls['cc'].value,this.Form.controls['idVend'].value,this.Form.controls['nom'].value.toString().toUpperCase())
      .subscribe(result=>{
        console.log(result);
        this.dialogRef.close();
      })
    }
  }
}
