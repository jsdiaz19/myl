import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormGroupDirective,FormBuilder,NgForm }  from '@angular/forms';
import { Router } from '@angular/router'
import { DataService} from '../../service/Data/data.service'
import {ErrorStateMatcher} from '@angular/material/core';
import {LoginService} from '../../service/LoginService/login-service.service';
import { ToastrService } from 'ngx-toastr';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface User{
  id: string;
  password: string;
  co?: string;
  nom?: string;
  position?: string;
  store?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  user: User;
  form = new FormGroup({
    user: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  constructor(private HttBD: LoginService,private toastr: ToastrService, private formBuilder: FormBuilder, private router: Router, private Data: DataService) {
  }

  ngOnInit() {
  }

  SearchUser(){
    if(!this.form.invalid){  // validation of input
      this.user={id: this.form.get('user').value, password: this.form.get('password').value};
      this.HttBD.verifyUser(this.user).subscribe(result=>{
        if(!result){ this.toastr.success("Usuario o contraseña incorrecto");}
        else{
          this.user.co=result[0];
          this.user.store=result[1];
          this.user.nom=result[2];
          this.user.position=result[3];
          this.Data.setData(this.user); 
          this.HttBD.Inactivity();
          
          this.router.navigate(['/starter']);
        }

      })

    }
  }

}
