import { Component,OnInit,} from '@angular/core';
import { HttBDService} from '../../service/Http/htt-bd.service'
import {MatTableDataSource} from '@angular/material'
import {DataService} from '../../service/Data/data.service'

export interface Budget{
  CO: string;
  Meta: number;
  Ds: number;
  Semana: number
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
  displayedColumns: string[] = ['CO','Meta', 'DS','Fecha','Semana'];
  Source=null;
  Store=null;
  id=null;
  constructor(private HttpBD: HttBDService, private Data: DataService) { }


  ngOnInit(){
    this.id=this.Data.Get_usr().trim();
    var param='all';
    if(this.id!="001"){
      param=this.HttpBD.idUsr; 
    }
    this.HttpBD.Budget(param).subscribe(result =>{
      this.Source= new MatTableDataSource(Object.values(result) );
      this.Source.filterPredicate = (data, filter) => {
        const dataStr = data[0];
        return dataStr.indexOf(filter) != -1; 
      } 
    })

    this.HttpBD.Cod_Store().subscribe(result => {
      this.Store=result;
    })
    
  }

  applyFilter(FilterValue){
    this.Source.filter=FilterValue.target.value.toString().trim();
  }
}
