import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl,FormGroupDirective,NgForm,Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material'
import { HttBDService} from '../../service/Http/htt-bd.service'
import { DataService} from '../../service/Data/data.service';
import {ErrorStateMatcher} from '@angular/material/core';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {DialogReportComponent} from './dialog-report/dialog-report.component';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { element } from '@angular/core/src/render3';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface Payment {
  tipo: string;
  id: string;
  cantidad?: number;
}

@Component({
  selector: 'app-report-store',
  templateUrl: './report-store.component.html',
  styleUrls: ['./report-store.component.css']
})
export class ReportStoreComponent implements OnInit {
  Source=null;
  initial: Payment[]=[{tipo: 'Efectivo', id:'11'},{tipo: 'Visa', id:'1'},{tipo: 'Master', id:'2'},{tipo: 'Myl beneficios', id:'3'},{tipo: 'Inmediata', id:'4'},{tipo: 'Dinners', id:'5'},{tipo: 'A. express', id:'6'},{tipo: 'Exito', id:'7'},{tipo: 'Bonos / Vip', id:'8'},{tipo: 'CMR / FALABELLA', id:'9'},{tipo: 'UNICO.COM', id:'12'},{tipo:'OTROS MP', id:'10'},{tipo:'MERCADO PAGO', id:'13'}];
  displayedColumns: string[]=['PAGO', 'CANTIDAD'];
  
  cost=0;
  button=['false','true','true'];
  typeBox=['PRINCIPAL','CONTINGENCIA','MANUAL'];
  content=[];
  matcher = new MyErrorStateMatcher();
  miMapa = new Map();
  date;
  dateMin;
  DisableAnomaly='true';
  flagAnomaly=0;
  dateMax=new Date();
  ctrlFact=[];
  opt=null;
  Form = new FormGroup({
    type: new FormControl('',Validators.required),
    sale: new FormControl('',Validators.required),
    factIn: new FormControl('',[Validators.required,Validators.min(1)]),
    fact: new FormControl('',[Validators.required,Validators.min(1)]),
    date: new FormControl('',Validators.required),
    anomaly: new FormControl(''),
  });
  

  constructor(private HttpBD: HttBDService, private Data: DataService,public dialog: MatDialog,private _router: Router,private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.Source= new MatTableDataSource(this.initial);
    var arr=[];
    arr.push({text: 'CAJA',bold: true, fontSize: 12, color:'black',alignment: 'center'});
    this.initial.forEach( (element) =>{
      this.miMapa.set(element.tipo,0);
      arr.push({text: element.tipo,bold: true, fontSize: 12, color:'black',alignment: 'center'});
    });
    this.miMapa.set('Efect_total',0);
    this.miMapa.set('Tar_total',0);
    this.miMapa.set('total',0);
    this.miMapa.set('totalVenta',0);
    this.miMapa.set('totalUnico',0);
    this.ctrlFact.push([{text: 'CAJA',style: 'header'},{text: 'FACTURA INICIAL',style: 'header'},{text: 'FACTURA FINAL',style: 'header'}]);
    this.content.push(arr);
  }

  isDate(){
    var date=this.Form.controls['date'].value.toString().split('/');
    var temp= new Date(date[2],date[1]-1 ,date[0] )
    if( !(temp && (temp.getMonth() + 1) == date[1]) ){
      alert("La fecha es invalida");
      this.Form.controls['date'].reset();
    }
    else{
      this.HttpBD.LastDate(this.Data.GetCo(),this.Form.controls['date'].value).subscribe(result =>{
        if(result!=null){
          alert("La fecha ya se encuentra registrada");
          this.Form.controls['date'].reset();
        }
      })
    }
    
  }
  getCost(event,tipo){
    this.miMapa.set(tipo,parseInt(event.target.value));
    var sum=0;
    this.miMapa.forEach((value,key)=>{
      if(key!='total' && key!='anomaly' && key!='Efect_total' && key!='Tar_total' && key!='totalVenta' && key!='totalUnico'){
        sum+=value;
      }
    });
    this.miMapa.set('total',sum); 
  }

  reset(){
    this.Form.reset();
    this.miMapa.set('total',0);
    this.initial.forEach( (element) =>{
      this.miMapa.set(element.tipo,0);
    });
    var rows= document.getElementsByTagName('Table')[0].getElementsByTagName('input');
    var temp=0;
    for(var i=0; i<11;i++){
      rows[i].value="0"; 
    }
  }

  Save(){  
    if (parseInt(this.Form.controls['sale'].value)!=this.miMapa.get('total')){
      alert("El valor total de venta no correspone con la distribucion de venta");
      this.Form.reset();
      
    }
    else if(this.Form.invalid || Number(this.Form.controls['factIn'].value)>Number(this.Form.controls['fact'].value)){
      alert("Por favor digite todos los campos");
    }
    else{
      
      this.ctrlFact.push([{text:this.typeBox[this.Form.controls['type'].value-1]},{text:this.Form.controls['factIn'].value},{text:this.Form.controls['fact'].value}]);
      this.miMapa.set('totalVenta',this.miMapa.get('totalVenta')+this.miMapa.get('total'));
      this.miMapa.set('Efect_total',this.miMapa.get('Efect_total')+this.miMapa.get('Efectivo'));
      this.miMapa.set('totalUnico',this.miMapa.get('totalUnico')+this.miMapa.get('UNICO.COM'));
      this.initial.forEach( (element) =>{
        if(element.tipo!='Efectivo' && element.tipo!='UNICO.COM'){
          this.miMapa.set('Tar_total',this.miMapa.get('Tar_total')+this.miMapa.get(element.tipo));
        }
      });
      if(this.button[0]=='false'){
        
        this.date= this.Form.controls['date'].value;
        this.Form.controls['date'].disable();
        const dialogRef = this.dialog.open(DialogReportComponent, {
          width: '800px',height: '400px'}
        );
        dialogRef.afterClosed().subscribe(result =>{  
          this.button[this.button.indexOf('false')]='true';       
          if(result[0]!="null"){
            this.opt=result;
            this.button[this.opt.pop()]='false';
          }
          this.miMapa.set('anomaly',this.Form.controls['anomaly'].value);
          this.Form.controls['anomaly'].disable();
          this.BuildPdf();
        })
      }
      else{
        this.button[this.button.indexOf('false')]='true';
        this.button[this.opt.pop()]='false';
        this.BuildPdf();
      }
    }
    
  }

  BuildPdf(){
    var price=[];
    this.miMapa.forEach((valor,key)=>{price.push(valor);});
    this.HttpBD.ReportStore(this.Data.GetCo(),this.Form.controls['type'].value,price,this.Form.controls['fact'].value,this.date,this.Form.controls['factIn'].value,Number(this.Form.controls['type'].value)-1,this.miMapa.get('anomaly'))
    .subscribe(result =>{
      if(result=='Correct'){
        this.generate();
        if(JSON.stringify(this.button) ===JSON.stringify(['true','true','true'])){
          var message= confirm("RECUERDA DILIGENCIAR EL REGISTRO DE HORARIOS DEL DIA");
          if(message==true || message==false){
            this.HttpBD.Search(this.Data.GetCo()).subscribe(result =>{
              var content={table: {headerRows: 1,width: ['*','*','*','*','*','*','*','*','*','*','*','*','*',], body: this.content } };
              pdfMake.createPdf({pageOrientation: 'Landscape',pageSize: 'TABLOID',extend: 'pdfHtml5',
                content:[
                {text: 'INFORME DE VENTA', style: 'header',bold: true, fontSize: 20, color:'gray',alignment: 'center'},
                {text: 'CO:'+this.Data.GetCo().toString()+' - '+result, style: 'header',bold: true, fontSize: 20, color:'gray',alignment: 'center'},
                {text: 'FECHA:'+this.date, style: 'header',bold: true, fontSize: 20, color:'gray',alignment: 'center'},
                {text: '\n\n'},
                content,
                {text: '\n\n'},
                {table: {headerRows: 1, body: 
                  this.ctrlFact                    
                }},
                {text: '\n\n'},
                {text: 'TOTAL DE VENTA: $'+new Intl.NumberFormat().format(this.miMapa.get('totalVenta')),fontSize: 18},
                {text: '\n\n'},
                {text: 'TOTAL DE EFECTIVO: $'+new Intl.NumberFormat().format(this.miMapa.get('Efect_total')),fontSize: 18},
                {text: '\n\n'},
                {text: 'TOTAL DE TARJETAS: $'+new Intl.NumberFormat().format(this.miMapa.get('Tar_total')),fontSize: 18},
                {text: '\n\n'},
                {text: 'TOTAL DE UNICO.COM: $'+new Intl.NumberFormat().format(this.miMapa.get('totalUnico')),fontSize: 18},
                {text: '\n\n'},
                {text: 'COMENTARIOS: '+this.miMapa.get('anomaly'),fontSize: 18}
              ]}).download();
              this._router.navigate(['schedules',this.date]);
            }); 
          }           
        }
        else{
          this.reset();
          
        }
      }
      else{
        alert('No se pudo guardar la informacion, por favor verifica los datos');
      }    
    })
  }
    

  generate(){
    var arr=[];
    arr.push([{text: this.typeBox[this.Form.controls['type'].value-1] ,alignment: 'right'}]);
    this.initial.forEach( (element) =>{
      arr.push([{text: '$ '+new Intl.NumberFormat().format(this.miMapa.get(element.tipo)),alignment: 'right',fontSize: 16}]);
    });
    this.content.push(arr); 
  }
}
