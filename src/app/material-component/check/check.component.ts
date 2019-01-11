import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material'
import { HttBDService} from '../../service/htt-bd.service'
import {SelectionModel} from '@angular/cdk/collections';
import { equal } from 'assert';

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
  numBox=null;
  numProduct=null;
  Source=null;
  Data=null;
  miMapa = new Map();
  selection=null;
  initial: Product[]=[
    {cod: 'empty'}
  ];
  init: Description[]=[  ];
  constructor(private _route: ActivatedRoute, private HttpBD: HttBDService) { this.despacho=this._route.snapshot.paramMap.get('id')}


  ngOnInit() {
    this.Source= new MatTableDataSource(this.initial);
    this.Data= new MatTableDataSource(this.init);
    this.selection = new SelectionModel<Product>(true, []);
  }

  test(){
    if (document.getElementById('edit').textContent.length==12){
      this.HttpBD.Get_reference(document.getElementById('edit').textContent).subscribe(result =>{
        if (result!=null){
          if (this.initial.length>=1){
            document.getElementById('delete').style.display="inline";
            document.getElementById('close_box').style.display="inline";
          }
          else{
            document.getElementById('delete').style.display="none";
            document.getElementById('close_box').style.display="none";
          }
          this.initial.push({cod: document.getElementById('edit').textContent, cantidad: '1'})
          this.Source= new MatTableDataSource(this.initial);
          if (this.miMapa.get(document.getElementById('edit').textContent)== undefined){

            this.miMapa.set(document.getElementById('edit').textContent,[result['referencia'],1]);
          }
          else{
            this.init.pop();
            this.miMapa.set(document.getElementById('edit').textContent,[result['referencia'],this.miMapa.get(document.getElementById('edit').textContent)[1]+1]);
          }
          
          this.init.push({ref: result['referencia'],und: this.miMapa.get(document.getElementById('edit').textContent)[1] });
          this.Data= new MatTableDataSource(this.init);
          document.getElementById('edit').textContent='';
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
    //console.log(this.isAllSelected(),'aqui'  );
    if(this.isAllSelected()==true){
      //console.log('entro');
      this.selection.clear()
      this.Source.data.forEach(row => this.selection.select(row));
    
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

  Delete(){
    for (var index=0; index<this.selection.selected.length;index++){
      var ant=this.selection.selected[index];
      this.initial.splice(this.indexof(ant,this.initial),1);
      this.Source=new MatTableDataSource(this.initial);
      var del= this.miMapa.get(ant['cod']);
      this.miMapa.set(ant['cod'],[del[0],del[1]-1]);
      this.init.splice(this.indexof({ref: del[0], und: del[1]},this.init),1);
      if (del[1]-1>=1){
        this.init.push({ref: del[0],und: del[1]-1 });
      }
    }
    this.Data= new MatTableDataSource(this.init);
  }
}
