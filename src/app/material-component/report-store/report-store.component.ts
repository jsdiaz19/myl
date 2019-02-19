import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material'

export interface Payment {
  tipo: string;
  id: string;
  cantidad?: number;
}

@Component({
  selector: 'app-report-store',
  templateUrl: './report-store.component.html',
  styleUrls: ['./report-store.component.css']
})
export class ReportStoreComponent implements OnInit {
  Source=null;
  initial: Payment[]=[{tipo: 'Visa', id:'1'},{tipo: 'Master', id:'2'},{tipo: 'Myl beneficios', id:'3'},{tipo: 'Inmediata', id:'4'},{tipo: 'Dinners', id:'5'},{tipo: 'A. express', id:'6'},{tipo: 'Exito', id:'7'},{tipo: 'Bonos/Vip', id:'8'},{tipo: 'CMR/FALABELLA', id:'9'},{tipo: 'Otros', id:'10'}];
  displayedColumns: string[]=['PAGO', 'CANTIDAD'];
  cost=0;
  Form = new FormGroup({
    type: new FormControl(''),
    sale: new FormControl('',Validators.required),
  });

  constructor() { }

  ngOnInit() {
    this.Source= new MatTableDataSource(this.initial);
  }

  getCost(event){
  var rows= document.getElementsByTagName('Table')[0].getElementsByTagName('input');
  var temp=0;
  for(var i=0; i<10;i++){
    if(parseInt(rows[i].value.toString())){
      temp+=parseInt(rows[i].value.toString());
    } 
  }
  this.cost=temp;
  }

  Save(){
    console.log(this.Form.controls['type'].value)
    if (parseInt(this.Form.controls['sale'].value)!=this.cost){
      alert("El valor total de venta no correspone con la distribucion de venta");
    }
    else{
      console.log('iguales');
    }
  }

  onKey(event: any) { 
    var temp=event.target.value;
    if (!parseInt(temp)){
      event.target.value=null;
    }
  }

}
