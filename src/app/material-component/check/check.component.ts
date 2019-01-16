import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material'
import { HttBDService} from '../../service/htt-bd.service'
import {SelectionModel} from '@angular/cdk/collections';
import { Router } from '@angular/router'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { equal } from 'assert';
import { DescriptionDespachoComponent } from '../description-despacho/description-despacho.component';

export interface Product {
  cod: string;
  cantidad?: string;
}

export interface Description {
  ref: string;
  und?: number;
}

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  displayedColumns: string[] = ['Select','Codigo de barras', 'Cantidad'];
  labelColumns: string[]= ['Referencia', 'Unidades'];
  despacho=null;
  Box=null;
  numBox=0;
  numProduct=0;
  Source=null;
  Data=null;
  miMapa = new Map();
  selection=null;
  initial: Product[]=[
    {cod: 'empty'}
  ];
  init: Description[]=[  ];
  refUnd=null; 
  Attempts=3;
  constructor(private _route: ActivatedRoute, private HttpBD: HttBDService,private router: Router,public dialog: MatDialog) { 
    this.despacho=this._route.snapshot.paramMap.get('id');
    this.Box=this._route.snapshot.paramMap.get('num');
    this.HttpBD.UnidadBox(this.despacho,this.numBox+1).subscribe(result => {
      this.refUnd=result;
    })
  }


  ngOnInit() {
    this.Source= new MatTableDataSource(this.initial);
    this.Data= new MatTableDataSource(this.init);
    this.selection = new SelectionModel<Product>(true, []);
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
      var content=document.getElementById('edit').textContent; 
      document.getElementById('edit').textContent='';
      this.HttpBD.Get_reference(content).subscribe(result =>{
        if (result!=null){
          this.numProduct+=1;
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


  Delete(){
    for (var index=0; index<this.selection.selected.length;index++){
      var ant=this.selection.selected[index];
      this.initial.splice(this.indexof(ant,this.initial),1);
      this.Source=new MatTableDataSource(this.initial);
      var del= this.miMapa.get(ant['cod']);
      this.numProduct-=1;
      if(del[1]-1>0){
        this.miMapa.set(ant['cod'],[del[0],del[1]-1]);
        this.init.splice(this.indexof({ref: del[0], und: del[1]},this.init),1);
        this.init.push({ref: del[0],und: del[1]-1 });
      }else{
        this.miMapa.delete(ant['cod']);
        this.init.splice(this.indexof({ref: del[0], und: del[1]},this.init),1);
      }
      this.Data= new MatTableDataSource(this.init);
    }
    this.selection.clear();
  }


  ValidateBox(){
    if(this.refUnd.length==this.init.length){
      var temp=Array.from(this.miMapa.values());
      if(JSON.stringify(Array.from(this.miMapa.values()).sort())===JSON.stringify(Array.from(this.refUnd).sort())){
        window.alert("El numero de productos registrados coinciden\n\n                            CAJA VALIDADA");
        this.initial=[{cod: 'empty'}];
        this.init=[];
        this.Data= new MatTableDataSource(this.init);
        this.Source=new MatTableDataSource(this.initial);
        this.numBox+=1;
        this.miMapa.clear();
        if (this.numBox+1<=this.Box){
          this.HttpBD.UnidadBox(this.despacho,this.numBox+1).subscribe(result => {
            this.refUnd=result;          
          })
        }
        else{
          this.HttpBD.UpdateBox(this.despacho);
          this.router.navigate(['/button']);
        }
        
      }else{
        window.alert("El numero de productos registrados no coinciden con el numero de productos enviados, por favor intenta de nuevo");
        this.initial=[{cod: 'empty'}];
        this.init=[];
        this.Data= new MatTableDataSource(this.init);
        this.Source=new MatTableDataSource(this.initial);
        
        this.Attempts-=1;
        console.log('entro');
        if(this.Attempts==0){
          const dialogRef = this.dialog.open(DescriptionDespachoComponent, {
            width: '1000px',
            data: {inv: Array.from(this.miMapa.values())}
          });
        }
        else{
          this.miMapa.clear();
        }
      }   
    }
    else{
      window.alert("El numero de productos registrados no coinciden con el numero de productos enviados, por favor intenta de nuevo");
      this.initial=[{cod: 'empty'}];
      this.init=[];
      this.Data= new MatTableDataSource(this.init);
      this.Source=new MatTableDataSource(this.initial);
      
      this.Attempts-=1;
      console.log('entro');
      if(this.Attempts==0){
        const dialogRef = this.dialog.open(DescriptionDespachoComponent, {
          width: '1000px',
          data: {inv: Array.from(this.miMapa.values())}
        });
      }
      else{
        this.miMapa.clear();
      }
    }
  }
}
