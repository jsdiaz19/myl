import { Component, OnInit } from '@angular/core';
import { HttBDService} from '../../service/htt-bd.service'
import {MatTableDataSource} from '@angular/material'

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
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})



export class ButtonsComponent implements OnInit{
  displayedColumns: string[] = ['Id', 'Destino', 'Estado','Cajas','Unidades','Verificar'];
  Source=null;
  Store=null;
  
  constructor(private HttpBD: HttBDService) { }
  ngOnInit(){
    this.HttpBD.Get_Despacho().subscribe(result =>{
      console.log(result);
      this.Source= new MatTableDataSource(Object.values(result));
    })
    this.HttpBD.Cod_Store().subscribe(result => {
      this.Store=result;
    })
  }

  applyFilter(FilterValue){
    this.Source.filter=FilterValue.target.value.toString().trim();
  }
}
