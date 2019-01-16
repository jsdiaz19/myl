import { Component, OnInit,Inject  } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-description-despacho',
  templateUrl: './description-despacho.component.html',
  styleUrls: ['./description-despacho.component.css']
})
export class DescriptionDespachoComponent implements OnInit {

  inv=null;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DescriptionDespachoComponent>) { }

  ngOnInit() {
    this.inv=this.data.inv;
    console.log(this.data.inv);
  }

}
