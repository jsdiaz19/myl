import { Component} from '@angular/core';
import {HttBDService} from '../../service/Http/htt-bd.service';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.css']
})
export class UploadCsvComponent{
  month=1;
  constructor(private HttBD: HttBDService,public dialogRef: MatDialogRef<UploadCsvComponent>) { }


  Month(MonthValue){
    this.month=MonthValue.target.value;
    console.log(this.month);
  }

  UploadCsv(files: FileList){
    let file : File = files.item(0);
    if(files && files.length>0 && file.name.indexOf("csv")!=-1){
      let reader: FileReader = new FileReader();
      reader.readAsText(file);

      reader.onload = (e) => {
        let csv: string = reader.result.toString();
        var lines = csv.split("\n");
        var result = [];
        lines[0]=lines[0].slice(0,-1)
        var headers = lines[0].split(";");
        
        for (var i = 1; i < lines.length-1; i++) {
          var obj = {};
          var currentline = lines[i].slice(0,-1).split(";");
          for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
          }
          result.push(obj); 
        }
        result.pop();
        console.log(headers);
        var date = new Date();
        var month = date.getMonth()+1;
        this.HttBD.UpdateBudget({mes: month, Budget: JSON.stringify(result)}).subscribe(result => {
          if(result=="Correct"){
            this.dialogRef.close("Actualizar")
          }
        });
      }
    }
  }
  

}
