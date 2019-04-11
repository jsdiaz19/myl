import { Component,OnInit,} from '@angular/core';
import { HttBDService} from '../../service/Http/htt-bd.service'
import {MatTableDataSource} from '@angular/material'
import {DataService} from '../../service/Data/data.service'
import {MatDialog} from '@angular/material';
import {UploadCsvComponent} from '../upload-csv/upload-csv.component'
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router'

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
  displayedColumns: string[] = ['CO','Venta', 'Presupuesto','Deuda','Cumplimiento','Fecha corte','Presupuesto corte','Cumplimiento corte','P. prom','UPF','T. prom'];
  Source=null;
  Store=null;
  id=null;
  isNull=true;
  CoFilter = new FormControl('');
  DateFilter = new FormControl('');
  constructor(private HttpBD: HttBDService, private Data: DataService,public dialog: MatDialog, private router: Router) { }


  ngOnInit(){
    this.id=this.Data.Get_usr().toString().trim(); 
    this.HttpBD.BudgetStore().subscribe(result =>{
      this.isNull=false;
      console.log(result);
      this.Source= new MatTableDataSource(Object.values(result) );
      this.Source.filterPredicate = (data, filter) => {
        const dataStr = data[0];
        const dataSrc = data[4].date;
        return dataStr.indexOf(filter[0]) != -1 && dataSrc.substring(5,7).indexOf(filter[1])!= -1 ; 
      }
      this.applyFilter(); 
    }) 


    this.HttpBD.Store('All').subscribe(result => {
      this.Store=result;
    })
    if(this.id!='001'){
      this.CoFilter.setValue(this.id);
    } 
    if(this.Data.Get_Cargo().trim()!='Administrador'){
      document.getElementById('update').style.display="none";
    }
  } 

  applyFilter(){
    this.Source.filter=[this.CoFilter.value.toString().trim().split('-')[0].replace(/ /g, ""),this.DateFilter.value.toString().trim()];
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

  Detail(){
    if(this.CoFilter.value!='' && this.DateFilter.value!=''){
      this.Data.Set_Co(this.CoFilter.value.toString().trim().split('-')[0].replace(/ /g, ""));
      this.Data.Set_month(this.DateFilter.value);
      this.router.navigate(['/detail']);
    }
    else{
      alert('Co y periodo incorrecto, intentalo de nuevo');
    }
    
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
