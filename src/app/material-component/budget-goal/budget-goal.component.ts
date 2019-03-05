import { Component, OnInit } from '@angular/core';
import { HttBDService} from '../../service/Http/htt-bd.service'
import {MatTableDataSource} from '@angular/material'
import { FormControl } from '@angular/forms';
import {DataService} from '../../service/Data/data.service'

@Component({
  selector: 'app-budget-goal',
  templateUrl: './budget-goal.component.html',
  styleUrls: ['./budget-goal.component.css']
})
export class BudgetGoalComponent implements OnInit {

  Source=null;
  displayedColumns: string[] = ['CO','META','DIA','FECHA','ADMON','SENIOR','JUNIOR'];

  Data=null;
  Columns: string[] = ['CO','MES','TOTAL','ADMON','SENIOR','JUNIOR'];

  DataSource=null;
  Header: string[] = ['CO','TOTAL','MES','SEMANA','ADMON','SENIOR','JUNIOR'];

  Store=null;
  CoFilter = new FormControl('');
  DateFilter = new FormControl('');
  
  Co = new FormControl('');
  Date = new FormControl('');

  SearchCo = new FormControl('');
  week = new FormControl('');

  day=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
  id=null;
  constructor(private HttpBD: HttBDService,private DataUsr: DataService) { }

  ngOnInit() {
    var d = new Date();
    var n = d.getFullYear();
    var m = d.getMonth();
    this.id=this.DataUsr.Get_usr().toString().trim(); 
    this.HttpBD.Budget(n).subscribe(result=>{
      this.Source= new MatTableDataSource(Object.values(result));
      this.Source.filterPredicate = (data, filter) => {
        const dataStr = data[0];
        const dataSrc = data[3].date.toString().split('-')[1];
        
        return dataStr.indexOf(filter[0]) != -1 && dataSrc.indexOf(filter[1])!=-1 ; 
      }
      if(this.id!='001'){
        this.CoFilter.setValue(this.id);
        this.applyFilter();
      }
    });

    

    this.HttpBD.BudgetMonth(n).subscribe(result=>{
      this.Data= new MatTableDataSource(Object.values(result));
      this.Data.filterPredicate = (data, filter) => {
        const dataStr = data[0];
        const dataSrc = data[1];
        return dataStr.indexOf(filter[0]) != -1 && dataSrc.indexOf(filter[1])!= -1 ; 
      }
      if(this.id!='001'){
        this.Co.setValue(this.id);
        this.Filter();
      }
    })

    this.HttpBD.BudgetWeek(n,m).subscribe(result=>{
      this.DataSource= new MatTableDataSource(Object.values(result));
      this.DataSource.filterPredicate = (data, filter) => {
        const dataStr = data[0];
        const dataSrc = data[2];
        return dataStr.indexOf(filter[0])!=-1 && dataSrc.indexOf(filter[1])!=-1; 
      }
      if(this.id!='001'){
        this.SearchCo.setValue(this.id);
        this.Search();
      }
    })

    this.HttpBD.Store('All').subscribe(result => {
      this.Store=result;
    })
  }

  applyFilter(){
    this.Source.filter=[this.CoFilter.value.toString().trim().split('-')[0].replace(/ /g, ""),this.DateFilter.value.toString().trim()];
  }

  Filter(){
    this.Data.filter=[this.Co.value.toString().trim().split('-')[0].replace(/ /g, ""),this.Date.value.toString().trim()];
  }

  Search(){
    this.DataSource.filter=[this.SearchCo.value.toString().trim().split('-')[0].replace(/ /g, ""),this.week.value.toString().trim()];
  }

  NameDay(date){
    var c= new Date(date.date.toString());
    if(c.getDay()==0){
      return "Domingo"
    }
    return this.day[c.getDay()-1];
  }
}
