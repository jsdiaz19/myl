import { Component,OnInit} from '@angular/core';
import { HttBDService} from '../service/Http/htt-bd.service'
import {MatTableDataSource} from '@angular/material'
import {SelectionModel} from '@angular/cdk/collections';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import {MatDialog} from '@angular/material';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { DialogComponent } from '../material-component/dialog/dialog.component';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export interface Product {
  cod: string;
  cantidad?: string;
}

export interface Description {
  ref: string;
  und?: number;
}

export class str{
  public str: FormGroup = new FormGroup({
    stre:  new FormControl('')
  })
}
@Component({
  selector: 'app-starter',
  templateUrl: './create-despachos.component.html',
  styleUrls: ['./create-despachos.component.scss']
})
export class CreateDespachoComponent implements OnInit {
  store=null;
  ref=null;
  id=null;
  store_usr=[];
  today = new Date();
  usr=null;
  selection=null;
  Source=null;
  Data=null;
  displayedColumns: string[] = ['Select','Codigo de barras', 'Cantidad'];
  labelColumns: string[]= ['Referencia', 'Unidades'];
  miMapa = new Map();
  TypeProduct= new Map();
  initial: Product[]=[{cod: 'empty'}];
  init: Description[]=[  ];
  CountProduct=null;
  element=0;
  numBox=1;
  DisableSelect=false;
  Numproduct=0;
  Guide=null;
  Company=null;
  content=[];
  form: FormGroup;
  constructor(private HttpBD: HttBDService,private router: Router, public dialog: MatDialog,private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      stor: ['',Validators.required],
      st: ['',Validators.required],
    }); 
  }

  ngOnInit() {
    this.usr=this.HttpBD.idUsr;
    if(this.usr==null){this.usr=localStorage.getItem('id');}
    this.Source= new MatTableDataSource(this.initial);
    this.Data= new MatTableDataSource(this.init);
    this.selection = new SelectionModel<Product>(true, []);
    this.Store();
    this.Changeid();
    this.TypeProduct.set('TEXTIL',0);
    this.TypeProduct.set('CALZADO',0);
    this.TypeProduct.set('ACCESORIO',0);
    
  }

  Store(){
    
    this.HttpBD.Store(this.usr).subscribe(result => {
      this.store = result;
    })
  }

  Changeid(){
    this.HttpBD.Changeid().subscribe(result => {
      if (result!="Incorrect"){
        var temp= result.toString();
        while(temp.length<=3){temp="0"+temp;}
        this.id=temp
        this.ref=temp+"-001";       // consecutive
      }      
    })
  }

  onKey(event: any) { 
    var temp=event.target.value;
    if (!parseInt(event.target.value[event.target.value.length-1],10)){
      temp=event.target.value.slice(0,-1);
      event.target.value=temp;
    }
    this.CountProduct= parseInt(temp,10);
    
  }
  Reference(value){
    this.store_usr=value.toString().split('-');
    this.store_usr[0]=this.store_usr[0].replace(/ /g, "");
    if (this.store_usr[0].length>0){
      var dd = this.today.getDate();
      var mm = this.today.getMonth()+1;
      var yyyy = this.today.getFullYear();
      this.ref=this.id+"-001"+"-"+this.store_usr[0]+"-"+dd+mm+yyyy;
    }else{
      this.ref= this.id+"-001";
    }
    
  }

  equal(obj1,obj2){
    return JSON.stringify(obj1)==JSON.stringify(obj2);
  }

  indexof(obj1,element){
    for (var index=0; index<element.length;index++){
      if (this.equal(obj1,element[index])){ return index}
    }
    return -1;
  }

  Add_product(){
    if (document.getElementById('edit').textContent.length==12){
      this.element+=1; 
      var content=document.getElementById('edit').textContent; 
      document.getElementById('edit').textContent='';
      this.HttpBD.Get_reference(content).subscribe(result =>{
        if (result!=null){
          this.TypeProduct.set(result['tipo'],this.TypeProduct.get(result['tipo'])+1);
          if (this.initial.length>=1){
            document.getElementById('delete').style.display="block";
            document.getElementById('close_box').style.display="block";
            
          }
          else{
            document.getElementById('delete').style.display="none";
            document.getElementById('close_box').style.display="none";
            
          }
          this.initial.push({cod: content, cantidad: '1'})
          this.Source= new MatTableDataSource(this.initial);


          if (this.miMapa.get(content)== undefined){
            this.miMapa.set(content,[result['referencia'],1]);
            this.init.push({ref: result['referencia'],und: 1 });
          }
          else{
            this.init.splice(this.indexof({ref: result['referencia'], und: this.miMapa.get(content)[1]},this.init),1);
            this.miMapa.set(content,[result['referencia'],this.miMapa.get(content)[1]+1]);
            this.init.push({ref: result['referencia'],und: this.miMapa.get(content)[1] });
            
          }
          this.Data= new MatTableDataSource(this.init);
        }
      })
    }
    if (document.getElementById('edit').textContent.length>15){
      document.getElementById('edit').textContent='';
    }
    
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.Source.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if(this.isAllSelected()==true){
      this.selection.clear()
      this.Source.data.forEach(row => this.selection.select(row));
    
    }  
  }

  Delete_product(){
    for (var index=0; index<this.selection.selected.length;index++){
      var ant=this.selection.selected[index];
      this.initial.splice(this.indexof(ant,this.initial),1);
      this.Source=new MatTableDataSource(this.initial);
      var del= this.miMapa.get(ant['cod']);
      if(del[1]-1>0){
        this.miMapa.set(ant['cod'],[del[0],del[1]-1]);
        this.init.splice(this.indexof({ref: del[0], und: del[1]},this.init),1);
        this.init.push({ref: del[0],und: del[1]-1 });
      }else{
        this.miMapa.delete(ant['cod']);
        this.init.splice(this.indexof({ref: del[0], und: del[1]},this.init),1);
      }
      this.Data= new MatTableDataSource(this.init);
      this.element-=1;
    }
    this.selection.clear();
    
  }

  test(){
    
    
  }

  Display(){
    if(this.form.invalid){
      window.alert('Datos invalidos');
      this.form.reset();
    }
    else{
      document.getElementById('Tables').style.display='flex';
      document.getElementById('Message').style.display='flex';
      document.getElementById('Form').style.display='none';
      if(this.numBox==1){this.HttpBD.Save(this.ref,this.store_usr[0]);}
    }
    this.form.reset();
  }

  SaveBox(){
    if(this.element!=this.CountProduct){
      window.alert("El numero de productos registrado no coincide con el numero esperado");
    }
    else{
      this.HttpBD.Save_box(this.ref,this.numBox,this.init);
      document.getElementById("close_box").style.display="none";
      document.getElementById("delete").style.display="none";
      document.getElementById("Close").style.display="block";
      document.getElementById("CreateBox").style.display="block";
      this.initial=[{cod: 'empty'}];
      var temp= Array.from( this.miMapa.values());
      this.init=[];
      this.Data= new MatTableDataSource(this.init);
      this.Source=new MatTableDataSource(this.initial);
      this.Numproduct+=this.CountProduct;
      this.element=0;
      this.miMapa.clear(); 
      temp.unshift(['REFERENCIA','UNIDADES']);
      this.download(this.numBox,temp);
      this.TypeProduct.clear();
      this.TypeProduct.set('TEXTIL',0);
      this.TypeProduct.set('CALZADO',0);
      this.TypeProduct.set('ACCESORIO',0);
    }
  }

  NewBox(){
    document.getElementById("Message").style.display="none";
    document.getElementById('Tables').style.display="none";
    document.getElementById("Form").style.display="inline";
    document.getElementById("Close").style.display="none";
    document.getElementById("CreateBox").style.display="none";
    this.DisableSelect=true;
    this.numBox+=1;
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1000px',
      data: {id: this.usr, ref: this.ref, num: this.Numproduct}
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.Guide=result[0];
      this.Company=result[1];
      this.HttpBD.Send_email(this.store_usr[0],this.Numproduct,this.ref,this.Guide,this.Company);
      pdfMake.createPdf({content:this.content}).print();
      document.getElementById("Message").style.display="none";
      document.getElementById('Tables').style.display="none";
      document.getElementById("Form").style.display="inline";
      document.getElementById("Close").style.display="none";
      document.getElementById("CreateBox").style.display="none";
      this.Changeid()
    }) 
  }

  Close(){
    document.getElementById("delete").style.display="none";
    document.getElementById("Close").style.display="none";
    document.getElementById("CreateBox").style.display="none";
    document.getElementById("Close").style.display="none";
    this.openDialog();
  }

  download(numBox,temp) { 
    this.content.push(
      {
        table: {

          body: [
            [ 
              {
                style: 'tableExample',
                table: {
                  headerRows: 1,
                  body: [
                    [{text: 'TIENDA: \n\n', bold: true, fontSize: 20, color:'gray'}],
                    [{text: this.store_usr, bold: true}],
                    ['FECHA:'+this.today.getDate()+'/'+(this.today.getMonth()+1).toString()+'/'+this.today.getFullYear()],
                  ]
                },
                layout: 'noBorders'
              },
            ],
            [
              {
                style: 'tableExample',
                table: {
                  headerRows: 1,
                  body: [
                    [{text: 'CAJA:', bold: true, fontSize: 20, color:'gray'}],
                    [{text: this.numBox.toString(), fontSize: 18}],
                  ]
                },
                layout: 'noBorders'
              },
            ],
            [ 
              {
                style: 'tableExample',
                table: {
                  headerRows: 1,
                  body: [
                    [{text: 'REMITE:', bold: true, fontSize: 20, color:'gray'}],
                    [{text: 'MYL DE COLOMBIA S.A.S', bold: true}],
                    [{text: 'CALLE 11 No.100-121', bold: true}],
                    [{text: 'TEL.3960508 CALI', bold: true}],
                  ]
                },
                layout: 'noBorders'
              },
            ],
            [
              {
                style: 'tableExample',
                table: {
                  headerRows: 1,
                  body: [
                    [{text: 'PARA:', bold: true, fontSize: 20, color:'gray'}],
                    [{text: this.store_usr[1], bold: true}],
                  ]
                },
                layout: 'noBorders'
              },
            ],
            [
              {
                style: 'tableExample',
                table: {
                  headerRows: 1,
                  heights: [50, 50, 50],
                  body: [
                    [{text:'CALZADO\n\n'+this.TypeProduct.get('CALZADO').toString(), color:'gray'},{text:'TEXTIL\n\n'+this.TypeProduct.get('TEXTIL').toString(), color:'gray'},{text:'ACCESORIO\n\n'+this.TypeProduct.get('ACCESORIO').toString(), color:'gray'}]
                  ]
                },
              },
            ],
            [
              {
                style: 'tableExample',
                table: {
                  headerRows: 1,
                  heights: [50],
                  widths: [173],
                  body: [
                    [{text:'CANTIDAD TOTAL', color:'gray'}],
                    [{text: this.CountProduct.toString(), fontSize: 18}],
                  ]
                },
                layout: 'noBorders'
              },
            ]
            
          ]    
        }
      });
    this.content.push({text: 'Descripcion caja '+this.numBox.toString(), fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]});
    this.content.push({table: {body: temp}});
    this.content.push({text: '  ', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]});  
   }
}