import { Component, OnInit } from '@angular/core';
import { HttBDService} from '../service/Http/htt-bd.service'
import { FormGroup, FormControl, Validators,FormGroupDirective,FormBuilder,NgForm }  from '@angular/forms';
import { Router } from '@angular/router'
import { DataService} from '../service/Data/data.service'
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  readonly googlePlayLink: string;
  readonly appStoreLink: string;
  usuario= null;
  matcher = new MyErrorStateMatcher();
  usr={
    usuario: null,
    password: null
  }

  log = new FormGroup({
    user: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  constructor(private HttpBD: HttBDService,private formBuilder: FormBuilder, private router: Router, private Data: DataService,) {
  }

  ngOnInit() {
    var popUp= window.open('https://www.google.com');
    if(popUp==null || typeof(popUp)=='undefined'){
      alert('Por favor deshabilita el bloqueador de ventanas emergentes y vuelve a refrescar el navegador');
    }
    else {  
      popUp.close();
    }
  }

  SearchUser(){
    if(!this.log.invalid){
      this.usr.usuario=this.log.get('user').value;
      this.usr.password=this.log.get('password').value;
      this.HttpBD.SearchUser(this.usr);
    }
  }

}
