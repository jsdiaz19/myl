import { Component, OnInit } from '@angular/core';
import { HttBDService} from '../../service/Http/htt-bd.service'
import { DataService} from '../../service/Data/data.service';
import {MatTableDataSource} from '@angular/material'
import * as XLSX from 'xlsx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-low-sales-product',
  templateUrl: './low-sales-product.component.html',
  styleUrls: ['./low-sales-product.component.css']
})
export class LowSalesProductComponent implements OnInit {
  Store=null;
  Header: string[]= ['PRODUCTO','MARCA','HACE 2 MESES','HACE 1 MES','MES ACTUAL','ROTAR'];
  Co=null;
  Source=null;
  hidden=false;
  Marca=null;
  constructor(private HttpBD: HttBDService,private Data: DataService) { }

  ngOnInit() {
    this.Co=this.Data.Get_usr();
    this.HttpBD.Cod_Store().subscribe(result => {
      this.Store=result;
    });

    if(this.Co.trim()!="001"){
      this.HttpBD.LowSales(this.Co).subscribe(result =>{
        this.Source=null;
        this.Source= new MatTableDataSource(Object.values(result));
        document.getElementById('Download').style.display='inline'; 
      })
    }
    else{
      document.getElementById('Filtering').style.display='inline';
    }

  }

  loading(value){
    console.log(value.target.value.trim());
    this.HttpBD.LowSales(value.target.value.trim()).subscribe(result =>{
      this.Source=null;
      console.log(result);
      this.Source= new MatTableDataSource(Object.values(result)); 
      document.getElementById('Download').style.display='inline'; 
    })
  }

  exportAsExcel(){
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(document.getElementById('Table'));
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }

  applyFilter(FilterValue){
    this.HttpBD.LowSales(FilterValue.target.value.toString().trim()).subscribe(result =>{
      this.Source=null;
      this.Source= new MatTableDataSource(Object.values(result)); 
      document.getElementById('Download').style.display='inline'; 
    })
  }
}
