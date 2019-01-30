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
  displayedColumns: string[] = ['Co','Venta','Presupuesto','Cumplimiento'];
  constructor(private Data: DataService,private HttpBD: HttBDService) { }

  ngOnInit() {
    this.month=this.Data.Get_month();
    this.Co=this.Data.Get_Co();
    this.HttpBD.BudgetSale(this.Co,this.month).subscribe(result =>{
      console.log(result);
      this.Source= new MatTableDataSource(Object.values(result));
    })
  }

}
