import { Component,OnInit} from '@angular/core';
import {CreateDespachoService} from '../../service/CreateDespachoService/create-despacho.service'
import { HttBDService} from '../../service/Http/htt-bd.service';
import { DataService} from '../../service/Data/data.service';
import {ShopsService} from '../../service/Shops/shops.service';
import {PDFdespachoService} from '../../service/PDFdespachoService/pdfdespacho.service'
import {MatTableDataSource} from '@angular/material'
import {SelectionModel} from '@angular/cdk/collections';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import {MatDialog} from '@angular/material';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { refreshDescendantViews } from '@angular/core/src/render3/instructions';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export interface Product {
  cod: string;
  cantidad?: string;
}

export interface Description {
  ref: string;
  und?: number;
}



@Component({
  selector: 'app-starter',
  templateUrl: './create-despachos.component.html',
  styleUrls: ['./create-despachos.component.scss']
})
export class CreateDespachoComponent implements OnInit {
  store=null;
  ref=null;
  store_usr=['-','-'];
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
  form=new FormGroup({
    cant: new FormControl(''),
    store: new FormControl('',Validators.required),
    textil: new FormControl(''),
  }); 

  constructor(
      private HttpBD: HttBDService,private router: Router, 
      public dialog: MatDialog,
      private data: DataService, 
      private ListStore: ShopsService,
      private pdf: PDFdespachoService,
      private http: CreateDespachoService
    ) {
    
  }

  ngOnInit() {
    this.usr=this.data.GetCo();
    this.Source= new MatTableDataSource(this.initial);
    this.Data= new MatTableDataSource(this.init);
    this.selection = new SelectionModel<Product>(true, []);
    this.ListShops();
    this.UpdateRef();
    this.TypeProduct.set('TEXTIL',0);
    this.TypeProduct.set('CALZADO',0);
    this.TypeProduct.set('ACCESORIO',0);
    
  }

  ListShops(){
    this.ListStore.ListStore().subscribe(result=>{
      this.store = result;
    });  
  }

  UpdateRef(){
    this.ListStore.GetConsecutive().subscribe(result=>{
      this.ref=result.toString()+'-'+this.usr+'-'+this.store_usr[0].trim()+'-'+this.ListStore.GetDate();
    });
  }

  Display(){
    if( this.form.invalid || ( !this.form.controls['textil'].value && this.form.controls['cant'].value=='')) {
      window.alert('Datos invalidos');
      this.UpdateRef();
    }
    else{
      document.getElementById('Tables').style.display='flex';
      document.getElementById('Message').style.display='flex';
      document.getElementById('Form').style.display='none';
      if(this.numBox==1){this.http.Save(this.ref,this.store_usr[0]);}
    }

  }

  Disable(){
    if(this.form.controls['textil'].value){
      this.form.controls['cant'].enable();
    }
    else{
      this.form.controls['cant'].disable();
    }
  }
  


  onKey(event: any) { 
    var temp=event.target.value;
    if ( Number.isNaN(Number(temp)) ){
      alert('El campo no es numerico');
      event.target.value=null;
    }
    else{
      this.CountProduct= Number(temp);
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
      this.http.GetReference(content).subscribe(result =>{
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
            this.miMapa.set(content,[result['referencia'],1,result['tipo']]);
            this.init.push({ref: result['referencia'],und: 1 });
          }
          else{
            this.init.splice(this.indexof({ref: result['referencia'], und: this.miMapa.get(content)[1]},this.init),1);
            this.miMapa.set(content,[result['referencia'],this.miMapa.get(content)[1]+1,result['tipo']]);
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
      this.TypeProduct.set(del[2],this.TypeProduct.get(del[2])-1);
      if(del[1]-1>0){
        this.miMapa.set(ant['cod'],[del[0],del[1]-1,del[2]]);
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




  SaveBox(){
    if(this.element!=this.CountProduct && this.form.controls['textil'].value!=true){
      window.alert("El numero de productos registrado no coincide con el numero esperado");
    }
    else{
      if( this.form.controls['textil'].value){ this.CountProduct='';}
      this.http.SaveBox(this.ref,this.numBox,this.init);
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
      temp.unshift(['REFERENCIA','UNIDADES','TIPO']);
      this.pdf.AddBox(temp,this.store_usr[1],this.store_usr[1],this.TypeProduct,this.CountProduct);
      this.TypeProduct.clear();
      this.TypeProduct.set('TEXTIL',0);
      this.TypeProduct.set('CALZADO',0);
      this.TypeProduct.set('ACCESORIO',0);
    }
  }

  NewBox(){
    this.form.controls['store'].disable();
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
      data: {id: this.usr, ref: this.ref, num: this.Numproduct, box: this.pdf.GetBox()}
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.Guide=result[0];
      this.Company=result[1];
      this.http.SendEmail(this.store_usr[0],this.Numproduct,this.ref,this.Guide,this.Company);
      this.Refresh();
    }) 
  }

  Refresh(){
    location.reload();
  }
}