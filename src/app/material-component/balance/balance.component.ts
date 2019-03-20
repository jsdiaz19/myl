import { Component, OnInit } from '@angular/core';
import { HttBDService} from '../../service/Http/htt-bd.service'
import {MatTableDataSource} from '@angular/material'

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  Source=null;
  displayedColumns: string[] = ['CO','FECHA','VALIDAR','ELIMINAR'];
  constructor(private HttpBD: HttBDService) { }

  ngOnInit() {
    this.HttpBD.View_report().subscribe(result =>{
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
