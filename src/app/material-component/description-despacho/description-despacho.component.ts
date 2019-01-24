import { Component, OnInit,Inject  } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { HttBDService} from '../../service/Http/htt-bd.service'
@Component({
  selector: 'app-description-despacho',
  templateUrl: './description-despacho.component.html',
  styleUrls: ['./description-despacho.component.css']
})
export class DescriptionDespachoComponent implements OnInit {

  inv=null;
  descript=null;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private HttpBD: HttBDService,public dialogRef: MatDialogRef<DescriptionDespachoComponent>) { }

  ngOnInit() {
    this.inv=this.data.inv;
    console.log(this.data.ref);
  }

  Get(event: any){
    this.descript=event.target.value;
  }
  SendInfo(){
    document.getElementById('spinner').style.display="block";
    this.HttpBD.Anomaly(this.data.ref,this.inv,this.descript).subscribe(result =>{
      if(result!=null){
        this.dialogRef.close();
      }
    })
    
    
  }

}
