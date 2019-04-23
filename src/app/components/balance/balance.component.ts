import { Component, OnInit } from '@angular/core';
import { BalanceService} from '../../service/BalanceService/balance.service';
import {MatTableDataSource} from '@angular/material'

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  Source=null;
  displayedColumns: string[] = ['CO','FECHA','VALIDAR','ELIMINAR'];
  constructor(private HttpBD: BalanceService) { }

  ngOnInit() {
    this.HttpBD.ViewReport().subscribe(result =>{
      this.Source= new MatTableDataSource(Object.values(result));
    })
  }
  Delete(co,fecha){
    this.HttpBD.DeleteReport(co,fecha).subscribe(result=>{
      if(result=='Correct'){
        location.reload();
      }
    })
  }

}
