import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttBDService} from '../../service/Http/htt-bd.service'
import {MatTableDataSource} from '@angular/material'
import { element } from '@angular/core/src/render3';
@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  displayedColumns: string[] = ['CO','CEDULA','NOMBRE'];
  Date = new FormControl('');
  Source=null;
  
  constructor(private HttpBD: HttBDService) { }

  ngOnInit() {
  }

  Find(){
    // this.HttpBD.DateAvaliable(this.Date.value).subscribe(result=>{
    //   var arr=result.toString().split(',');
    //   arr.forEach((element)=>{
    //     this.displayedColumns.push(element);
    //   })
    // })
    this.HttpBD.ReportSchedules().subscribe(result=>{
      console.log(result);
      this.Source= new MatTableDataSource(Object.values(result));
    })

  }

  trackByFn(index, item) {
    return item.id;
  }
}
