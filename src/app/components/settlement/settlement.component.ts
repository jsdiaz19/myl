import { Component, OnInit } from '@angular/core';
import {ShopsService} from '../../service/Shops/shops.service';
import { PositionService} from '../../service/PositionService/position.service';
import {HttBDService} from '../../service/Http/htt-bd.service';
import { FormGroup, FormControl,FormGroupDirective,NgForm,Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material'

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {
  store=null;
  sellerList=null;
  DisplayColumns: String[]= ['CO','VENDEDOR','VENTA','META','INCENTIVOS','CUMPLIMIENTO TIENDA'];
  Columns: String[]= ['CO','VENDEDOR','SEMANA','VENTA','META','CUMPLIMIENTO','CUMPLIMEINTO TIENDA','INCENTIVOS'];
  Source=null;
  DataSource=null;
  hidden: Boolean = false;
  Form = new FormGroup({
    co: new FormControl('',Validators.required),
    position: new FormControl('',Validators.required),
    month: new FormControl('',Validators.required),
    seller: new FormControl('',Validators.required),
  });
  constructor(  private storeService: ShopsService, private HttpBD: PositionService, private bd: HttBDService) { }

  ngOnInit() {
    this.storeService.ListStore().subscribe(result => {
      this.store = result;
    });

  }

  seller(){
    this.HttpBD.Position(this.Form.controls['co'].value).subscribe(result=>{
      this.sellerList= result;
    })
  }

  Search(){
    this.bd.settlement(this.Form.controls['co'].value,this.Form.controls['seller'].value,this.Form.controls['position'].value,this.Form.controls['month'].value).subscribe(result=>{
      this.hidden=true;
      this.Source= new MatTableDataSource(Object.values(result));
      this.Form.disable();
      document.getElementById('submit').style.display="none";
    });
    this.bd.weekSettlement(this.Form.controls['co'].value,this.Form.controls['seller'].value,this.Form.controls['position'].value,this.Form.controls['month'].value).subscribe(result=>{
      this.DataSource= new MatTableDataSource(Object.values(result));
    })
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

  ParseWeek(value){
    if(parseFloat(value)>90){
      return 1;
    }
    else if(parseFloat(value)>85){
      return 2;
    }
    return 3;
  }

  Apply(value){
    if(parseFloat(value)>80){
      return 0;
    }
    else{
      return 1;
    }
  }

  Verify(value,sales){
    if(parseFloat(value)>85 && parseFloat(sales)>=80){
      return 0;
    }
    else{
      return 1;
    }
  }

}
