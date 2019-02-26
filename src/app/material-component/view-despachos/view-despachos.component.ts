import { Component, OnInit } from '@angular/core';
import { HttBDService} from '../../service/Http/htt-bd.service'
import {MatTableDataSource} from '@angular/material'
import {DataService} from '../../service/Data/data.service';

export interface Despacho {
  Id: string;
  Origen: number;
  Destino: number;
  Estado: string;
  Cajas: string;
  Unidades: string;
}

@Component({
  selector: 'app-buttons',
  templateUrl: './view-despachos.component.html',
  styleUrls: ['./view-despachos.component.scss']
})



export class ViewdespachosComponent implements OnInit{
  displayedColumns: string[] = ['Id', 'Origen', 'Estado','Cajas','Unidades','Verificar'];
  Source=null;
  Store=null;
  idStore=null;
  constructor(private HttpBD: HttBDService, private Data: DataService) { }
  ngOnInit(){
    this.idStore=this.Data.Get_usr();
    this.HttpBD.Get_Despacho(this.idStore).subscribe(result =>{
      if(result!=null){
        this.Source= new MatTableDataSource(Object.values(result));
        
      }
      
    })
    this.HttpBD.Cod_Store().subscribe(result => {
      this.Store=result;
    })
  }

  applyFilter(FilterValue){
    this.Source.filter=FilterValue.target.value.toString().trim();
  }
}
