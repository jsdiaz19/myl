import { Component, OnInit } from '@angular/core';
import { HttBDService} from '../../service/Http/htt-bd.service'
import { DataService} from '../../service/Data/data.service';
import {MatTableDataSource} from '@angular/material'
import * as XLSX from 'xlsx';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-low-sales-product',
  templateUrl: './low-sales-product.component.html',
  styleUrls: ['./low-sales-product.component.css']
})
export class LowSalesProductComponent implements OnInit {
  Store=null;
  Header: string[]= ['CO','REFERENCIA','HACE 2 MESES','HACE 1 MES','MES ACTUAL'];
  header: string[]= ['MARCA','REFERENCIA','HACE 2 MESES','HACE 1 MES','MES ACTUAL'];
  Co=null;
  Source;
  DataSource;
  hidden=false;
  Marca=null;
  Brand='';
  IdCO='';
  disableSelect = new FormControl(false);
  disable = new FormControl(false);
  constructor(private HttpBD: HttBDService,private Data: DataService) { 
  }

  ngOnInit() {
    this.Co=this.Data.Get_usr();
    this.HttpBD.Cod_Store().subscribe(result => {
      this.Store=result;
    });
    
    this.HttpBD.LowSales().subscribe(result =>{
      this.Source= new MatTableDataSource(Object.values(result));
      document.getElementById('Download').style.display="inline";
      document.getElementById('Marca').style.display="inline";
      document.getElementById('Filtering').style.display="inline";
      document.getElementById('Table').style.display="table"; 
      this.Source.filterPredicate = (data, filter) => {
        const dataStr = data[0];
        return dataStr.indexOf(filter) != -1; 
      }
    });


    this.HttpBD.ProducBrand().subscribe(result =>{
      this.DataSource= new MatTableDataSource(Object.values(result));
      document.getElementById('Abstract').style.display="table"; 
      this.DataSource.filterPredicate = (data, filter) => {
        const dataStr = data[0];
        return dataStr.indexOf(filter) != -1; 
      }
    });
    
    
  }

  exportAsExcel(){
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(document.getElementById('Table'));
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }

  applyFilter(){
    this.Source.filter=this.IdCO.toString().trim();   
  }

  Filter(){
    this.DataSource.filter=this.Brand.toString().trim();   
  }

  Disable(){
    
    if(!this.disableSelect.value){
      this.disable.disable();
      document.getElementById('Abstract').style.display="none"; 
      document.getElementById('Table').style.display="table"; 
    }
    else{
      this.disable.enable();
    }
  }

  Disabled(){
    
    if(!this.disable.value){
      this.disableSelect.disable();
      document.getElementById('Abstract').style.display="table"; 
      document.getElementById('Table').style.display="none";  
    }
    else{
      this.disableSelect.enable();
    }
  }
}
