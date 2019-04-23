import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttBDService} from '../../service/Http/htt-bd.service'
import {DataService} from '../../service/Data/data.service';
import {ShopsService} from '../../service/Shops/shops.service'
import {MatTableDataSource} from '@angular/material'
import * as XLSX from 'xlsx';
import { element } from '@angular/core/src/render3';
@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  displayedColumns: string[] = ['VEND_CC','VEND_CC_DESC'];
  Date = new FormControl('');
  co = new FormControl('');
  Source=null;
  store;
  view=false;
  constructor(private HttpBD: HttBDService, private Data: DataService, private storeService: ShopsService) {
   }

  
  ngOnInit() {
    this.storeService.ListStore().subscribe(result => {
      this.store = result;
    })
  }

  Find(){
    
    this.HttpBD.DateAvaliable(this.Date.value).subscribe(result=>{
      console.log(result);
      if(result!=null){
        this.view=true;
        Object.values(result).forEach((element)=>{
          this.displayedColumns.push(element.date.substr(0,10));
          this.HttpBD.ReportSchedules().subscribe(result=>{
            this.Source= new MatTableDataSource(Object.values(result));
            this.Source.filterPredicate = (data, filter) => {
              return '0'+data.co.toString().trim()==filter.trim(); 
            }
          })
        })
      }
      else{
        alert('Actualmente, el periodo seleccionado no esta disponible');
      }     
    })
    

  }

  applyFilter(){
    this.Source.filter=this.co.value;
  }

  Download(){
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(document.getElementById('Table'));
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }
}
