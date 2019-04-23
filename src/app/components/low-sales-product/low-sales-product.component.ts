import { Component, OnInit } from '@angular/core';
import { LowSalesService} from '../../service/LowSalesService/low-sales.service'
import { DataService} from '../../service/Data/data.service';
import {ShopsService} from '../../service/Shops/shops.service'
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
  header: string[]= ['MARCA','REFERENCIA','ITEM','HACE 2 MESES','HACE 1 MES','MES ACTUAL'];
  Co=null;
  Source;
  DataSource;
  hidden=false;
  Marca=null;
  Brand='';
  IdCO='';
  disableSelect = new FormControl(false);
  disable = new FormControl(false);
  constructor(private HttpBD: LowSalesService,private Data: DataService, private storeService: ShopsService) { 
  }

  ngOnInit() {
    this.Co=this.Data.GetCo();
    this.storeService.ListStore().subscribe(result => {
      this.Store=result;
    });
    
    this.HttpBD.LowSales(this.Co.trim()).subscribe(result =>{
      if(result!=null){
      this.Source= new MatTableDataSource(Object.values(result));
      this.Source.filterPredicate = (data, filter) => {
        const dataStr = data[0];
        return dataStr.indexOf(filter) != -1; 
      }
      if(this.Co.toString().trim()!='001'){
        this.IdCO=this.Co;
        this.applyFilter();
        document.getElementById('Download').style.display="inline";
        document.getElementById('Table').style.display="table";
        document.getElementById('loading').style.display="none";
      }
      else{
        document.getElementById('Filtering').style.display="inline";
        document.getElementById('Download').style.display="inline";
        document.getElementById('Table').style.display="table";
        document.getElementById('loading').style.display="none";
      }
    }
    else{
      document.getElementById('info').style.display="inline";
      document.getElementById('loading').style.display="none";
    }
    });    
  }

  Find(){
    document.getElementById('spinner').style.display="inline";
    this.HttpBD.ProducBrand(this.Brand).subscribe(result =>{
      if( result!=null){
        this.DataSource= new MatTableDataSource(Object.values(result));
        document.getElementById('spinner').style.display="none";
        document.getElementById('Abs').style.display="table";      
        this.DataSource.filterPredicate = (data, filter) => {
          const dataStr = data[0];
          return dataStr.indexOf(filter)!=-1; 
        }
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
    this.Source.filter=this.IdCO.toString().trim().split('-')[0].replace(/ /g, "");   
  }

  Filter(){
    this.DataSource.filter=this.Brand.toString().trim();   
  }

  Disable(){
    
    if(!this.disableSelect.value){
      this.disable.disable();
      document.getElementById('Abstract').style.display="none"; 
      document.getElementById('Table').style.display="table";
      document.getElementById('Download').style.display="inline"; 
    }
    else{
      this.disable.enable();
      document.getElementById('Download').style.display="none";
    }
  }

  Disabled(){
    
    if(!this.disable.value){
      this.disableSelect.disable();
      document.getElementById('Abstract').style.display="table"; 
      document.getElementById('Table').style.display="none"; 
      document.getElementById('Download').style.display="none"; 
    }
    else{
      this.disableSelect.enable();
    }
  }
}