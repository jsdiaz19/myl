import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormGroupDirective,NgForm,Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material'
import { HttBDService} from '../../service/Http/htt-bd.service'
import { DataService} from '../../service/Data/data.service';
import {ErrorStateMatcher} from '@angular/material/core';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { text } from '@angular/core/src/render3';
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
  initial: Payment[]=[{tipo: 'Efectivo', id:'11'},{tipo: 'Visa', id:'1'},{tipo: 'Master', id:'2'},{tipo: 'Myl beneficios', id:'3'},{tipo: 'Inmediata', id:'4'},{tipo: 'Dinners', id:'5'},{tipo: 'A. express', id:'6'},{tipo: 'Exito', id:'7'},{tipo: 'Bonos / Vip', id:'8'},{tipo: 'CMR / FALABELLA', id:'9'},{tipo:'OTROS MP', id:'10'}];
  displayedColumns: string[]=['PAGO', 'CANTIDAD'];
  cost=0;
  button=['false','false','false'];
  typeBox=['ONLINE','CONTINGENCIA','MANUAL'];
  content=[];
  matcher = new MyErrorStateMatcher();
  miMapa = new Map();
  date;
  dateMin;
  dateMax= new Date(new Date().getFullYear(), 11, 31).toISOString().split('T')[0];
  ctrlFact=[];
  Form = new FormGroup({
    type: new FormControl('',Validators.required),
    sale: new FormControl('',Validators.required),
    factIn: new FormControl('',[Validators.required,Validators.min(1)]),
    fact: new FormControl('',[Validators.required,Validators.min(1)]),
    date: new FormControl('',Validators.required),
  });
  

  constructor(private HttpBD: HttBDService, private Data: DataService) { }

  ngOnInit() {
    this.Source= new MatTableDataSource(this.initial);
    this.HttpBD.LastDate(this.Data.Get_Co()).subscribe(result =>{
      if (result!=null){
        this.dateMin=result;
        this.dateMin=this.dateMin.date.toString().substr(0,10)
      }
      else{
        this.dateMin= new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];
      }
    })
    this.content.push([{text: 'CAJA',bold: true, fontSize: 12, color:'black',alignment: 'center'},
    {text: this.initial[0].tipo,bold: true, fontSize: 12, color:'black',alignment: 'center'},
    {text:this.initial[1].tipo,bold: true, fontSize: 12, color:'black',alignment: 'center'},
    {text:this.initial[2].tipo,bold: true, fontSize: 12, color:'black',alignment: 'center'},
    {text:this.initial[3].tipo,bold: true, fontSize: 12, color:'black',alignment: 'center'},
    {text:this.initial[4].tipo,bold: true, fontSize: 12, color:'black',alignment: 'center'},
    {text:this.initial[5].tipo,bold: true, fontSize: 12, color:'black',alignment: 'center'},
    {text:this.initial[6].tipo,bold: true, fontSize: 12, color:'black',alignment: 'center'},
    {text:this.initial[7].tipo,bold: true, fontSize: 12, color:'black',alignment: 'center'},
    {text:this.initial[8].tipo,bold: true, fontSize: 12, color:'black',alignment: 'center'},
    {text:this.initial[9].tipo,bold: true, fontSize: 12, color:'black',alignment: 'center'},
    {text:this.initial[10].tipo,bold: true, fontSize: 12, color:'black',alignment: 'center'}] );
    this.miMapa.set('Efectivo',0);
    this.miMapa.set('Visa',0);
    this.miMapa.set('Master',0);
    this.miMapa.set('Myl beneficios',0);
    this.miMapa.set('Inmediata',0);
    this.miMapa.set('Dinners',0);
    this.miMapa.set('A. express',0);
    this.miMapa.set('Exito',0);
    this.miMapa.set('Bonos / Vip',0);
    this.miMapa.set('CMR / FALABELLA',0);
    this.miMapa.set('OTROS MP',0);
    this.miMapa.set('total',0);
  }

  getCost(event){
    var rows= document.getElementsByTagName('Table')[0].getElementsByTagName('input');
    var temp=0;
    for(var i=0; i<11;i++){
      if(parseInt(rows[i].value.toString())){
        temp+=parseInt(rows[i].value.toString());
      } 
    }
    this.cost=temp;
  }

  reset(){
    var rows= document.getElementsByTagName('Table')[0].getElementsByTagName('input');
    var temp=0;
    for(var i=0; i<11;i++){
      rows[i].value="0"; 
    }
  }

  Save(){
    if (parseInt(this.Form.controls['sale'].value)!=this.cost){
      alert("El valor total de venta no correspone con la distribucion de venta");
      this.Form.reset();
    }
    else if(this.Form.invalid || Number(this.Form.controls['factIn'].value)>Number(this.Form.controls['fact'].value)){
      alert("Por favor digite todos los campos");
    }
    else{
      if(this.Form.controls['date'].value!=null){this.date=this.Form.controls['date'].value;}
      this.Form.controls['date'].disable();
      var temp=this.Form.controls['type'].value;
      var Fact= this.Form.controls['fact'].value;
      var price=[];
      for(var i=7; i<document.getElementsByTagName('input').length;i++){
        price.push(document.getElementsByTagName('input')[i].value);
        this.miMapa.set(this.initial[i-7].tipo,this.miMapa.get(this.initial[i-7].tipo)+Number(document.getElementsByTagName('input')[i].value));
        if(i!=7){
          this.miMapa.set('total',this.miMapa.get('total')+Number(document.getElementsByTagName('input')[i].value));
        }
        
      }
      var co=this.Data.Get_Co();  
      this.ctrlFact.push([this.typeBox[Number(this.Form.controls['type'].value)-1],this.Form.controls['factIn'].value,this.Form.controls['fact'].value])
      this.HttpBD.ReportStore(co,temp,price,Fact,this.date).subscribe(result =>{
        this.button[Number(temp)-1]='true';
        this.generate();
        this.cost=0;
        this.reset();
        if(JSON.stringify(this.button) ===JSON.stringify(['true','true','true'])){
          var content={table: {headerRows: 1, widths: ['*', '*','*','*','*', '*','*','*','*', '*','*','*'], body: this.content}};
          pdfMake.createPdf({pageOrientation: 'Landscape',pageSize: 'TABLOID',extend: 'pdfHtml5',
              content:[
                {text: 'INFORME DE VENTA', style: 'header',bold: true, fontSize: 20, color:'gray',alignment: 'center'},
                {text: 'CO:'+this.Data.Get_Co().toString(), style: 'header',bold: true, fontSize: 20, color:'gray',alignment: 'center'},
                {text: 'FECHA:'+this.date, style: 'header',bold: true, fontSize: 20, color:'gray',alignment: 'center'},
                {text: '\n\n'},
                content,
                {text: '\n\n'},
                {table: {headerRows: 1, body: 
                  [
                    [{text: 'CAJA',style: 'header'},
                    {text: 'FACTURA INICIAL',style: 'header'},
                    {text: 'FACTURA FINAL',style: 'header'}],
                    
                    [{text: this.ctrlFact[0][0]},
                    {text: this.ctrlFact[0][1]},
                    {text: this.ctrlFact[0][2]}],

                    [{text: this.ctrlFact[1][0]},
                    {text: this.ctrlFact[1][1]},
                    {text: this.ctrlFact[1][2]}],

                    [{text: this.ctrlFact[2][0]},
                    {text: this.ctrlFact[2][1]},
                    {text: this.ctrlFact[2][2]}],
                  ],
                  
                }},
                {text: '\n\n'},
                {text: 'TOTAL EFECTIVO : $ '+this.miMapa.get('Efectivo'),bold: true,fontSize: 18},
                {text: 'TOTAL TARJETAS : $ '+ this.miMapa.get('total'),bold: true,fontSize: 18},
                {text: 'TOTAL DE VENTA : $ '+ (Number(this.miMapa.get('Efectivo'))+Number(this.miMapa.get('total'))).toString(),bold: true,fontSize: 18}
              ]
              }).download('reporte.pdf');
        }
        else{
          this.Form.reset();
        }
        
      })
      
      
    }
  }

  generate(){
    this.content.push([
      [{text: this.typeBox[Number(this.Form.controls['type'].value)-1] +'\n',alignment: 'right'}],
      [{text: '$ '+document.getElementsByTagName('Table')[0].getElementsByTagName('input')[0].value+'\n',alignment: 'right'}],
      [{text: '$ '+ document.getElementsByTagName('Table')[0].getElementsByTagName('input')[1].value+'\n',alignment: 'right'}],
      [{text: '$ '+ document.getElementsByTagName('Table')[0].getElementsByTagName('input')[2].value+'\n',alignment: 'right'}],
      [{text: '$ '+ document.getElementsByTagName('Table')[0].getElementsByTagName('input')[3].value+'\n',alignment: 'right'}],
      [{text: '$ '+ document.getElementsByTagName('Table')[0].getElementsByTagName('input')[4].value+'\n',alignment: 'right'}],
      [{text: '$ '+ document.getElementsByTagName('Table')[0].getElementsByTagName('input')[5].value+'\n',alignment: 'right'}],
      [{text: '$ '+ document.getElementsByTagName('Table')[0].getElementsByTagName('input')[6].value+'\n',alignment: 'right'}],
      [{text: '$ '+ document.getElementsByTagName('Table')[0].getElementsByTagName('input')[7].value+'\n',alignment: 'right'}],
      [{text: '$ '+ document.getElementsByTagName('Table')[0].getElementsByTagName('input')[8].value+'\n',alignment: 'right'}],
      [{text: '$ '+ document.getElementsByTagName('Table')[0].getElementsByTagName('input')[9].value+'\n',alignment: 'right'}],
      [{text: '$ '+ document.getElementsByTagName('Table')[0].getElementsByTagName('input')[10].value+'\n',alignment: 'right'}],
    ]);
    if(JSON.stringify(this.button) ===JSON.stringify(['true','true','true'])){
      this.content.push([
        [{text: "TOTAL "}],
        [{text: '$ '+this.miMapa.get(this.initial[0].tipo),alignment: 'right',bold: true}],
        [{text: '$ '+this.miMapa.get(this.initial[1].tipo),alignment: 'right',bold: true}],
        [{text: '$ '+this.miMapa.get(this.initial[2].tipo),alignment: 'right',bold: true}],
        [{text: '$ '+this.miMapa.get(this.initial[3].tipo),alignment: 'right',bold: true}],
        [{text: '$ '+this.miMapa.get(this.initial[4].tipo),alignment: 'right',bold: true}],
        [{text: '$ '+this.miMapa.get(this.initial[5].tipo),alignment: 'right',bold: true}],
        [{text: '$ '+this.miMapa.get(this.initial[6].tipo),alignment: 'right',bold: true}],
        [{text: '$ '+this.miMapa.get(this.initial[7].tipo),alignment: 'right',bold: true}],
        [{text: '$ '+this.miMapa.get(this.initial[8].tipo),alignment: 'right',bold: true}],
        [{text: '$ '+this.miMapa.get(this.initial[9].tipo),alignment: 'right',bold: true}],
        [{text: '$ '+this.miMapa.get(this.initial[10].tipo),alignment: 'right',bold: true}],
      ]);
    }

    
  }
}
