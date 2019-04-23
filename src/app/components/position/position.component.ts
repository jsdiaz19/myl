import { Component, OnInit } from '@angular/core';
import { PositionService} from '../../service/PositionService/position.service';
import {MatTableDataSource} from '@angular/material'
import { DataService} from '../../service/Data/data.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import {ShopsService} from '../../service/Shops/shops.service'

export interface ChangeSeller{
  hidden: boolean;
  idVend: number;
  vend: string;
  date?: string;
  Cargo?: string;
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
  hidden=false;
  avaliable=false;
  store=null;
  Source: ChangeSeller[] = [];
  DataSource: SellerWeek[]=[];
  Header: string[]= ['SELECCION','VENDEDOR','FECHA DE CAMBIO','CARGO A CAMBIAR'];
  Columns: string[]= ['SELECCION','VENDEDOR','CARGO'];
  weeks=null;
  FormGroup = new FormGroup({
    Co: new FormControl('',Validators.required),
    month: new FormControl('',Validators.required),
    weeks: new FormControl('',Validators.required),
  });
  Form = new FormGroup({
    Co: new FormControl('',Validators.required),
    month: new FormControl('',Validators.required),
  })
  constructor(private HttpBD: PositionService,private Data: DataService, private storeService: ShopsService) { }

  ngOnInit() {
    this.storeService.ListStore().subscribe(result => {
      this.store=result;
    });
  }

///////////////////////////////////// Mensual /////////////////////////////////////////////////////////////////
  Search(){
    var co=this.FormGroup.controls['Co'].value.toString().trim().split('-')[0].replace(/ /g, "");
    this.HttpBD.Position(co,this.FormGroup.controls['month'].value).subscribe(result=>{
      this.DataSource=[];
      Object.values(result).forEach(element=>{
        this.DataSource.push({hidden: element[0],vend:element[1],idVend: element[2]});
      })
    })
    this.hidden=true;
  }

  Position(){
    var sellerUpdate: SellerWeek[] =[];
    this.DataSource.forEach(seller=>{
      if(!seller.hidden){ sellerUpdate.push(seller); }
    })
    var co=this.FormGroup.controls['Co'].value.toString().trim().split('-')[0].replace(/ /g, "");
    var month= this.FormGroup.controls['month'].value;
    var week= this.FormGroup.controls['weeks'].value;
    this.HttpBD.SetPosition(month,week,sellerUpdate,co).subscribe(result=>{
      console.log(result);
    })
  }

  ViewWeek(){
    var month=this.FormGroup.controls['month'].value;
    this.HttpBD.view_week(month).subscribe(result=>{
      this.weeks= result;
    })
  }

///////////////////////////////////////////////     ////////////////////////////////////////////////////

///////////////////////////////////// Diario  /////////////////////////////////////////////////////////////////



SearchSeller(){
  var co=this.Form.controls['Co'].value.toString().trim().split('-')[0].replace(/ /g, "");
  this.HttpBD.Position(co,this.Form.controls['month'].value).subscribe(result=>{
    this.Source=[];
    Object.values(result).forEach(element=>{
      this.Source.push({hidden: element[0],vend:element[1],idVend: element[2]});
    })
  })
  this.avaliable=true;
}

UpdateSeller(){
  var seller: ChangeSeller[] = [];
  this.Source.forEach(element=>{
    if(!element.hidden){ seller.push(element); }
  });
  console.log(seller);
  var co=this.Form.controls['Co'].value.toString().trim().split('-')[0].replace(/ /g, "");
  var month= this.Form.controls['month'].value;
  this.HttpBD.UpdateSeller(seller,co,month).subscribe(result=>{
    console.log(result);
  })
}
}
