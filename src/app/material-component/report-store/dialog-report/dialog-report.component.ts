import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { FormGroup, FormControl,FormGroupDirective,NgForm,Validators } from '@angular/forms';
@Component({
  selector: 'app-dialog-report',
  templateUrl: './dialog-report.component.html',
  styleUrls: ['./dialog-report.component.css']
})
export class DialogReportComponent implements OnInit {
  
  Form = new FormGroup({
    type: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<DialogReportComponent>) { }

  ngOnInit() {
  }

  onClick(){
    this.dialogRef.close(this.Form.controls['type'].value.split(","));
  }

}
