import { Component, OnInit } from '@angular/core';
import { DataService} from '../../service/Data/data.service';
import { HttBDService} from '../../service/Http/htt-bd.service'
import {MatTableDataSource} from '@angular/material'

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent implements OnInit {

  month=null;
  Co=null;
  Source=null;
  DataSource=null;
  InfoSource=null;
  DataSeller=null;
  displayedColumns: string[] = ['Co','Presupuesto','Venta','Cumplimiento','Fecha corte','Presupuesto corte','Cumplimiento corte', 'P. prom','UPF','T. prom'];
  Columns: string[] = ['Co','Lapso','Semana','Meta','Cantidad','Venta','Cumplimiento','P. prom','UPF','T. prom'];
  Header: string[] = ['Co','Semana','Vendedor','Cantidad','Venta'];
  displayedHeader: string[] = ['Co','Vendedor','Cantidad','Venta','Distribucion de venta','P. prom','UPF','T. prom']; 
  constructor(private Data: DataService,private HttpBD: HttBDService) { }

  ngOnInit() {
    this.month=this.Data.Get_month();
    this.Co=this.Data.Get_Co();

    this.HttpBD.BudgetSale(this.Co,this.month).subscribe(result =>{
      this.Source= new MatTableDataSource(Object.values(result));
    })
    this.HttpBD.BudgetSale_Week(this.Co,this.month).subscribe(result =>{
      this.DataSource= new MatTableDataSource(Object.values(result));
    })
    this.HttpBD.BudgetSellerWeek(this.Co,this.month).subscribe(result =>{
      this.InfoSource= new MatTableDataSource(Object.values(result));
    })
    this.HttpBD.BudgetSeller(this.Co,this.month).subscribe(result =>{
      this.DataSeller= new MatTableDataSource(Object.values(result)); 
    })
  }

  Parse(value){
    if(parseFloat(value)>90){
      return 1;
    }
    else if(parseFloat(value)>80){
      return 2;
    }
    return 3;
  }

}
