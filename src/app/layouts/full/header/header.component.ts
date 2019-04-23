import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../service/Data/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  nom=null;
  constructor(private router: Router, private Data: DataService){this.nom=this.Data.GetNom().trim()}
  Close_session(){
    this.Data.Close_sesison();
    this.router.navigate(['/login']);
  }
}
