import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material'
import { element } from '@angular/core/src/render3';
import { HttBDService} from '../../../service/Http/htt-bd.service';
import { DataService} from '../../../service/Data/data.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {NewUserComponent} from './new-user/new-user.component';
import {Router} from '@angular/router';

export interface schedules {
  sigla: string;
  desc: string;
}

export interface person{
  index: number;
  nombre: string;
  cargo: string;
  horario: string;
  id?: string;
  del?: boolean;
}

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})

export class SchedulesComponent implements OnInit {

  Source=null;
  initial: schedules[]=[{sigla:'ACS',desc:'10am a 8pm'},{sigla:'ACF',desc:'10am a 9pm'},{sigla:'MCS',desc:'12am a 8pm'},{sigla:'A6',desc:'10am a 6pm'},{sigla:'A3',desc:'10am a 3pm'},{sigla:'TCS',desc:'3pm a 8pm'},{sigla:'MCF',desc:'3pm a 9pm'},{sigla:'D',desc:'Descanso'}];
  displayedColumns: string[]=['SIGLA', 'DESCRIPCION'];

  DataSource=null;
  Header: string[]=[' ','NOMBRE','CARGO','HORARIO'];
  Data: person[]=[{index: 0,nombre: '',cargo: '',horario:'',del: false}]

  nom='';
  occupation='';
  scheduler='';

  delete=[false];
  vend=null;

  siglas=[];
  constructor(private HttpBD: HttBDService,private DataBD: DataService,private _route: ActivatedRoute,public dialog: MatDialog,private _router: Router) { }

  ngOnInit() {
    this.HttpBD.View_scheduler().subscribe(result=>{
      this.Source= new MatTableDataSource(Object.values(result));
      Object.values(result).forEach((element)=>{
        this.siglas.push(element.sigla);
      })

    })
    this.DataSource=this.Data;
    this.HttpBD.List_vend().subscribe(result=>{
      this.vend=result;
    })
  }

  add(){
    if(this.occupation!='' && this.scheduler!='' && this.nom!=''){
      var t= this.occupation;
      var d=this.scheduler;
      var n=this.nom;
      this.delete.push(false);
      this.Data.push({index: this.Data.length ,nombre: n[0].trim(),cargo: t, horario:d, id: n[1]});
      this.DataSource=new MatTableDataSource(this.Data);
      this.occupation='';
      this.scheduler='';
      this.nom='';
    }
    else{
      alert('Por favor, ingrese un nombre, cargo y horario valido');
    }
  }

  change(event,index){
    this.Data[index].del=event.checked;  
  }

  deleted(){
    for(var i=this.Data.length-1;i>=0;i--){
      if(this.Data[i].del){
        this.Data.splice(i,1);
      }
    }
    this.DataSource=new MatTableDataSource(this.Data);
  }

  save(){
    this.Data.shift();
    console.log(this.DataBD.GetCo()),this._route.snapshot.paramMap.get('date'),JSON.stringify(this.Data);
    this.HttpBD.Scheduler(this.DataBD.GetCo(),this._route.snapshot.paramMap.get('date'),JSON.stringify(this.Data)).subscribe(result=>{
      if(result=='Correct'){
        this._router.navigate(['/report']);
      }
    })
  }

  NewUser(){
    const dialogRef = this.dialog.open(NewUserComponent, {
      width: '900px',height: '560px'}
    );
    dialogRef.afterClosed().subscribe(result=>{
      this.HttpBD.List_vend().subscribe(result=>{
        this.vend=result;
      })
    })
  }
}
