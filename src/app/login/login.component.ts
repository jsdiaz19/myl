import { Component, OnInit } from '@angular/core';
import { HttBDService} from '../service/Http/htt-bd.service'
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Router } from '@angular/router'
import { DataService} from '../service/Data/data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario= null;

  usr={
    usuario: null,
    password: null
  }
  log: FormGroup;
  constructor(private HttpBD: HttBDService,private formBuilder: FormBuilder, private router: Router, private Data: DataService) {
    this.log=this.formBuilder.group({
      user: ['',Validators.required],
      password: ['',Validators.required],
    }); 
   }

  ngOnInit() {
  }

  SearchUser(){
    if(!this.log.invalid){
      this.usr.usuario=this.log.get('user').value;
      this.usr.password=this.log.get('password').value;
      this.HttpBD.SearchUser(this.usr);
    }
    
  }
}
