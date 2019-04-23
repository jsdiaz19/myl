import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { DialogServiceService} from '../../service/DialogService/dialog-service.service'
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  transport=null;
  guide=null;
  company=null;
  constructor(private HttpBD: DialogServiceService,@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit() {
    this.HttpBD.Get_transport().subscribe(result => {
      this.transport=result;
    })
  }

  Company(value){
    this.company=value;
  }

  onKey(event: any){
    var temp=event.target.value;
    if(temp.length>0){
      this.guide=temp;
      document.getElementById('Send').style.display="block";
    }
  }

  SendInfo(){
    this.HttpBD.Update_state(this.data.ref,2,this.company[1],this.guide);
    var win = window.open('', '_blank');
    pdfMake.createPdf({content:this.data.box}).open({},win);
    this.dialogRef.close([this.guide,this.company[0]]);
  }
}
