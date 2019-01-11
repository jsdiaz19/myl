import { Component, OnInit } from '@angular/core';
import { HttBDService} from '../service/htt-bd.service'

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

  constructor(private HttpBD: HttBDService) { }

  ngOnInit() {
  }

  SearchUser(){
    this.HttpBD.SearchUser(this.usr);
  }
}
