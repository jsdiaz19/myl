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
  displayedColumns: string[] = ['Co','Venta','Presupuesto','Cumplimiento','Fecha corte','Presupuesto corte','Cumplimiento corte'];
  Columns: string[] = ['Co','Lapso','Cantidad','Venta','Semana','Meta','Cumplimiento'];
  Header: string[] = ['Co','Semana','Vendedor','Cantidad','Venta'];
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
    this.HttpBD.BudgetSeller(this.Co,this.month).subscribe(result =>{
      this.InfoSource= new MatTableDataSource(Object.values(result));
    })
  }

}
