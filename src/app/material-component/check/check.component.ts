import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material'
import { HttBDService} from '../../service/htt-bd.service'

export interface Product {
  cod: string;
  cantidad?: string;
}



@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  displayedColumns: string[] = ['Codigo de barras', 'Cantidad'];
  despacho=null;
  Source=null;
  initial: Product[]=[
    {cod: 'empty'}
  ];
  constructor(private _route: ActivatedRoute, private HttpBD: HttBDService) { this.despacho=this._route.snapshot.paramMap.get('id')}


  ngOnInit() {
    this.Source= new MatTableDataSource(this.initial);
  }

  test(){
    if (document.getElementById('edit').textContent.length==12){
      this.HttpBD.Get_reference(document.getElementById('edit').textContent).subscribe(result =>{
        if (result!=null){
          this.initial.push({cod: document.getElementById('edit').textContent, cantidad: '1'})
          this.Source= new MatTableDataSource(this.initial);
          document.getElementById('edit').textContent='';
        }
      })
    }
    if (document.getElementById('edit').textContent.length>15){
      document.getElementById('edit').textContent='';
    }
    
    
  }
}
