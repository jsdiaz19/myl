import { Component, OnInit } from '@angular/core';
import { HttBDService} from '../../service/Http/htt-bd.service'
import {MatTableDataSource} from '@angular/material'
import { DataService} from '../../service/Data/data.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';


export interface ChangeSeller {
  hidden: boolean;
  idVend: number;
  vend: string;
  Cargo: string;
  idCargo: number;
  fecha?: string;
  cambio?: string;
}

export interface SellerWeek {
  hidden: boolean;
  vend: string;
  idVend: number;
  Cargo?: string;
}

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})

export class PositionComponent implements OnInit {
  store=null;
  Source=[];
  DataSource: SellerWeek[]=[];
  Header: string[]= ['SELECCION','VENDEDOR','FECHA DE CAMBIO','CARGO A CAMBIAR'];
  Columns: string[]= ['SELECCION','VENDEDOR','CARGO'];
  weeks=null;
  hidden=false;
  Form = new FormGroup({
    CoFilter: new FormControl('',Validators.required),
  });
  
  FormGroup = new FormGroup({
    Co: new FormControl('',Validators.required),
    month: new FormControl('',Validators.required),
    semana: new FormControl('',Validators.required),
  });
  constructor(private HttpBD: HttBDService,private Data: DataService) { }

  ngOnInit() {
    this.HttpBD.Store('All').subscribe(result => {
      this.store=result;
    });
  }

  week(){
    console.log('entro');
    this.HttpBD.view_week(this.FormGroup.controls['month'].value).subscribe(result=>{
      this.weeks=result;
    })
  }

  Search(){
    if(this.Form.invalid){
      alert('Por favor, digita todos los campos');
      this.Form.reset();
    }
    else{
      var co= this.Form.controls['CoFilter'].value.toString().trim().split('-')[0].replace(/ /g, "");
      console.log(this.FormGroup.controls['semana'].value);
      this.HttpBD.Position(co,this.FormGroup.controls['semana'].value).subscribe(result=>{
        var data:ChangeSeller[]=[];
        Object.values(result).forEach(element=>{
          data.push({hidden: element[0],vend: element[1], idVend: element[2], Cargo: element[3], idCargo: element[4]});
        })
        this.Source=data;
        document.getElementById("update").style.display="inline";
      })
    }
  }

  Update(){
    var update=[]
    this.Source.forEach(element=>{
      if(element.hidden){ update.push({vend:element.idVend,cargo: element.cambio,fecha: element.fecha,co: this.Form.controls['CoFilter'].value.toString().trim().split('-')[0].replace(/ /g, "")})}
    })
    this.HttpBD.UpdatePosition(update).subscribe(result=>{
      console.log(result);
    }) 
  }

  SearchWeek(){
    this.hidden=true;
    var co=this.FormGroup.controls['Co'].value.toString().trim().split('-')[0].replace(/ /g, "");
    console.log(this.FormGroup.controls['semana'].value);
    this.HttpBD.Position(co,this.FormGroup.controls['semana'].value).subscribe(result=>{
      this.DataSource=[];
      Object.values(result).forEach(element=>{
        this.DataSource.push({hidden: element[0],vend:element[1],idVend: element[2]});
      })

    })
  }

  UpdateWeek(){
    this.DataSource.forEach(element=>{
      if(element.Cargo==null){
        console.log(element);
      }
    })
    // this.HttpBD.UpdateWeek(this.FormGroup.controls['Co'].value.toString().trim().split('-')[0].replace(/ /g, ""),this.semana,this.DataSource).subscribe(result=>{
    //   console.log(result);
    // })
  }
}
