import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {ActivatedRoute} from '@angular/router';
import { HttBDService} from '../../service/Http/htt-bd.service'
import {MatTableDataSource} from '@angular/material'
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
  co=null;
  date=null;
  Source=null;
  displayedColumns: string[] = ['CO','FECHA','TIPO DE PAGO','VALOR'];
  Data=null;
  DataSource=null;
  table=null;
  anomally=null;
  constructor(private _route: ActivatedRoute,private HttpBD: HttBDService) { 
    this.co=this._route.snapshot.paramMap.get('co');
    this.date=this._route.snapshot.paramMap.get('date');
    this.HttpBD.Main_box(this.co,this.date).subscribe(result=>{
      this.Source= new MatTableDataSource(Object.values(result));
    });

    this.HttpBD.Contigencebox(this.co,this.date).subscribe(result=>{
      if(result!=null){this.Data= new MatTableDataSource(Object.values(result));}
    })
    this.HttpBD.Manuallybox(this.co,this.date).subscribe(result=>{
      if(result!=null){this.DataSource= new MatTableDataSource(Object.values(result))};
    });
    this.HttpBD.Abstract(this.co,this.date).subscribe(result=>{
      if(result!=null){this.table= new MatTableDataSource(Object.values(result));}
    })
    this.HttpBD.Anomally_view(this.co,this.date).subscribe(result=>{
      if(result!==null){this.anomally=result;}
      
    })
  }

  ngOnInit() {
  }

  exportAsExcel(){
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(document.getElementById('Consolidado'));
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }
}
