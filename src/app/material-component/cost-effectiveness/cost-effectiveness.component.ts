import { Component, OnInit } from '@angular/core';
import { HttBDService} from '../../service/Http/htt-bd.service'
import {DataService} from '../../service/Data/data.service'
import {MatTableDataSource} from '@angular/material'
import * as XLSX from 'xlsx';
import { FormGroup, FormControl,FormGroupDirective,NgForm,Validators } from '@angular/forms';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cost-effectiveness',
  templateUrl: './cost-effectiveness.component.html',
  styleUrls: ['./cost-effectiveness.component.css']
})
export class CostEffectivenessComponent implements OnInit {

  Source=null;
  displayedColumns: string[] = ['CO','FECHA','VENTA','DEVOLUCIONES','VENTA NETA','COSTO','RENTABILIDAD','%RENTABILIDAD'];
  month= new FormControl('');
  year= new FormControl('');
  CurrentYear= new Date().getFullYear();
  Co="all";
  constructor(private HttpBD: HttBDService, private Data: DataService) { }

  ngOnInit() {
    
    this.HttpBD.Cost(this.CurrentYear,this.CurrentYear-1).subscribe(result =>{
      this.Source= new MatTableDataSource(Object.values(result));
      this.Source.filterPredicate = (data, filter) => {
        const dataStr = data[1];
        const dataCo=data[0];
        return dataCo==filter[0] && dataStr.substr(0,4).indexOf(filter[1]) !=-1 && dataStr.substr(4,dataStr.length).indexOf(filter[2]) != -1 ; 
      }
      console.log(this.Data.Get_Cargo());
      if(this.Data.Get_Cargo()!="Administrador"){
        console.log('entro');
        this.Co=this.Data.Get_usr();
        this.applyFilter();
      }
    })

  }

  applyFilter(){
    this.Source.filter=[this.Co,this.year.value.toString().trim().split('-')[0].replace(/ /g, ""),this.month.value.toString().trim()];
  }

  exportAsExcel(){
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(document.getElementById('abstract'));
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }
}
