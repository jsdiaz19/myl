import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { HttBDService} from '../../service/Http/htt-bd.service'
import { FormGroup, FormControl,FormGroupDirective,NgForm,Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-anomaly',
  templateUrl: './dialog-anomaly.component.html',
  styleUrls: ['./dialog-anomaly.component.css']
})
export class DialogAnomalyComponent implements OnInit {

  Form = new FormGroup({
    desc: new FormControl('')    
  });

  constructor(private HttpBD: HttBDService,@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DialogAnomalyComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close([this.Form.controls['desc'].value]);
  }
}
