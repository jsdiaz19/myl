import { Component,OnInit,} from '@angular/core';
import { HttBDService} from '../../service/Http/htt-bd.service'
import {MatTableDataSource} from '@angular/material'
import {DataService} from '../../service/Data/data.service'
import {MatDialog} from '@angular/material';
import {UploadCsvComponent} from '../upload-csv/upload-csv.component'

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
  constructor(private HttpBD: HttBDService, private Data: DataService,public dialog: MatDialog) { }


  ngOnInit(){
    this.id=this.Data.Get_usr().toString().trim();
    console.log(this.id.trim());    
    this.HttpBD.Budget(this.id).subscribe(result =>{
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

  upload(){
    const dialogRef = this.dialog.open(UploadCsvComponent, {
      width: '2000px',
      }
    );

    dialogRef.afterClosed().subscribe(result =>{
      if(result=='Actualizar'){
        this.ngOnInit();
      }
    })
  }
}
