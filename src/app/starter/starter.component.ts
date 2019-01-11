import { Component,OnInit } from '@angular/core';
import { HttBDService} from '../service/htt-bd.service'
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material'
import {SelectionModel} from '@angular/cdk/collections';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { environment } from '../../environments/environment';
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
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements OnInit {
  store=null;
  ref=null;
  id=null;
  store_usr=null;
  today = new Date();
  usr=null;
  selection=null;
  Source=null;
  Data=null;
  displayedColumns: string[] = ['Select','Codigo de barras', 'Cantidad'];
  labelColumns: string[]= ['Referencia', 'Unidades'];
  miMapa = new Map();
  initial: Product[]=[{cod: 'empty'}];
  init: Description[]=[  ];
  //num_product=[0];
  //count=null;
  
  //transport=null;
  

  /*refUser=[];
  checkButton=[];
  cod=null;
  numBox=1;
  Add_box=false;
  
  Numproduct=0;
  Product_box=[];
  summary=[0,0,0];
  content=[];
  summary_ant=[0,0,0];*/
  constructor(private HttpBD: HttBDService,private _route: ActivatedRoute) {this._route.queryParams.subscribe(params =>{
    this.usr=params['id'];
  })}
  ngOnInit() {
    this.Source= new MatTableDataSource(this.initial);
    this.Data= new MatTableDataSource(this.init);
    this.selection = new SelectionModel<Product>(true, []);
    this.Store();
    this.Changeid();
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
    if (!parseInt(event.target.value[event.target.value.length-1],10)){
      var temp=event.target.value.slice(0,-1);
      event.target.value=temp;
    }
  }
  Reference(value){
    var store= value.toString().substring(13,value.length);
    this.store_usr=store;
    if (store.length>0){
      this.HttpBD.Search(store).subscribe(result => {
      var temp= result.toString().trim();
      while(temp.length<=3){temp="0"+temp;}
      var dd = this.today.getDate();
      var mm = this.today.getMonth()+1;
      var yyyy = this.today.getFullYear();
      this.ref=this.id+"-001"+"-"+temp+"-"+dd+mm+yyyy;
      
      });
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
      var content=document.getElementById('edit').textContent; 
      document.getElementById('edit').textContent='';
      this.HttpBD.Get_reference(content).subscribe(result =>{
        if (result!=null){
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
            console.log(this.init);
          }
          else{
            console.log(this.init,'g');
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
    //console.log(this.isAllSelected(),'aqui'  );
    if(this.isAllSelected()==true){
      //console.log('entro');
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
      this.miMapa.set(ant['cod'],[del[0],del[1]-1]);
      this.init.splice(this.indexof({ref: del[0], und: del[1]},this.init),1);
      if (del[1]-1>=1){
        this.init.push({ref: del[0],und: del[1]-1 });
      }
    }
    this.Data= new MatTableDataSource(this.init);
    this.selection.selected=[];
  }
/*
  Show(event: any){
    this.count=event.target.value;
    if (this.count.length>0){
      document.getElementById("Register").style.display="inline";
      document.getElementById("summary").style.display="inline";
      document.getElementById("Store").style.display="none";
      document.getElementById("create_box").style.display="none";
      document.getElementById("finish").style.display="none";
      document.getElementById("product").style.display="none"; 
      document.getElementById("message").style.display="inline";
      document.getElementById("message").innerHTML="DESPACHO A LA TIENDA "+this.store_usr+" DE " + this.count + " PRODUCTOS";
      if( this.Add_box==false){
        var arregloDeSubCadenas = this.ref.split('-', 3);
        this.HttpBD.Save(this.ref, arregloDeSubCadenas[2]);
      }
      
    }
    
  }
  Add(){
    var tbl = document.getElementsByTagName('table')[0];
    var newrow= tbl.insertRow(-1);
    var cell= newrow.insertCell(0);
    var cell1= newrow.insertCell(1);
    cell.innerHTML="<td id='test' style='1px solid #dddddd;'><td>";
    cell1.innerHTML="1";
    cell.contentEditable="true";
    newrow.style.height="20px";
    newrow.style.textAlign="left";
    newrow.style.padding="8px";
    newrow.style.borderCollapse="collapse";
  }

  Validate(){
    var tbl = document.getElementsByTagName('table')[0];
    var td= document.getElementById("info");
    if (td.textContent.length==12){
      this.HttpBD.Get_reference(td.textContent).subscribe(result => {
        if (result!=null){
          this.checkButton.push(tbl.getElementsByTagName("tr").length);
          var newrow= tbl.insertRow(-1);
          var check= newrow.insertCell(0);
          var cell= newrow.insertCell(1);
          var cell1= newrow.insertCell(2);
          check.innerHTML="<td><input type='checkbox'></td>"
          cell.innerHTML="<td> <td>";
          cell.textContent= td.textContent;
          cell1.innerHTML="1";
          newrow.style.height="40px";
          cell.style.border="1px solid #dddddd";
          cell1.style.border="1px solid #dddddd";
          check.style.border="1px solid #dddddd";
          newrow.style.textAlign="left";
          newrow.style.padding="8px";
          newrow.style.borderCollapse="collapse";
          this.cod=td.textContent;
          td.textContent='';
          if (this.refUser.length==0){
            this.refUser.push([this.cod,result['referencia'],1,result['tipo']]);
            this.Add_product(result['tipo']);
            this.num_product[this.num_product.length-1]+=1;
            document.getElementById("delete").style.display="inline-block";
            document.getElementById("close_box").style.display="inline-block";
          }
          else{
            var index=0;
            while ( index<this.refUser.length && this.refUser[index][0]!=this.cod){
              index+=1;
            }
  
            if (index==this.refUser.length){ index=-1;}
            if (index!=-1){
              this.refUser[index][2]+=1;
              this.Add_product(this.refUser[index][3]);
              this.num_product[this.num_product.length-1]+=1;
              
            }
            else{
              this.refUser.push([this.cod,result['referencia'],1,result['tipo']]);
              this.Add_product(result['tipo']);
              this.num_product[this.num_product.length-1]+=1;
            }
          }
        }
      })           

    }
  }

  Add_product(ref){
    if (ref=='CALZADO'){
      this.summary[0]+=1;
    }
    if(ref=='TEXTIL'){
      this.summary[1]+=1;
    }
    if(ref=='ACCESORIOS'){
      this.summary[2]+=1;
    }
  }
  Delete(){
    var row= document.getElementById("myTable").getElementsByTagName("tr").length;
    var del=0;
    var refDelete=[];
    var td=document.getElementsByTagName('table')[0];
    for (var i=2; i<row;i++){
      if (document.getElementsByTagName('input')[i].checked){
        this.num_product[this.num_product.length-1]-=1;
        refDelete.push(document.getElementById("myTable").getElementsByTagName("tr")[i].getElementsByTagName("td")[1].textContent);
        td.deleteRow(i);
        row-=1;
        i-=1;     
      }
    }
    var index=0;
    while ( index<refDelete.length ){
      for (var i=0; i<this.refUser.length;i++){
        if (this.refUser[i][0]==refDelete[index]){
          this.refUser[i][2]-=1;
          if (this.refUser[i][2]==0){
            if (this.refUser[i][3]=='TEXTIL'){
              this.summary[1]-=1;
            }
            if (this.refUser[i][3]=='CALZADO'){
              this.summary[0]-=1;
            }
            if (this.refUser[i][3]=='ACCESORIO'){
              this.summary[2]-=1;
            }
            this.refUser.splice(i);
            
          }
        }
      }
      index+=1;
    }

  }
  Save_box(){
    if(this.count!=this.num_product[this.num_product.length-1]){
      window.alert("El numero de productos registrado no coincide con el numero esperado");
    }
    else{
      this.HttpBD.Save_box(this.ref,this.numBox,this.refUser);
      document.getElementById("close_box").style.display="none";
      document.getElementById("delete").style.display="none";
      document.getElementById("create_box").style.display="inline-block";
      document.getElementById("finish").style.display="inline-block";
      this.Numproduct+= this.num_product[this.num_product.length-1];
      this.Product_box.push(this.refUser); 
      var temp= [].concat(this.refUser);
      temp.unshift(['CODIGO DE BARRAS','REFERENCIA','UNIDADES','TIPO']);
      this.refUser=[];
      this.download(this.numBox,temp);
      this.summary_ant=this.summary.slice();
      
    }
  }

  Create_box(){
    document.getElementById("message").style.display="none";
    document.getElementById("summary").style.display="none";
    document.getElementById("product").style.display="inline-block";
    document.getElementById("product").nodeValue="0";
    document.getElementById("Register").style.display="none";
    var row= document.getElementById("myTable").getElementsByTagName("tr").length;
    var td=document.getElementsByTagName('table')[0];
    this.num_product.push(0);
    for (var i=2; i<row;i++){
      td.deleteRow(i);
      row-=1;
      i-=1;
    }
    this.numBox+=1;
    this.Add_box=true;

  }

  finalize(){
    document.getElementById("delete").style.display="none";
    document.getElementById("close_box").style.display="none";
    document.getElementById("create_box").style.display="none";
    var row= document.getElementById("myTable").getElementsByTagName("tr")[1];
    var column= row.getElementsByTagName("td")[1];
    column.contentEditable="false";
    document.getElementById("myForm").style.display="block";
    this.HttpBD.Get_transport().subscribe(result => {
      this.transport = result;
    })
    document.getElementById("finish").style.display="none";
  }

  Send(){
    this.HttpBD.Update_state(this.ref,2);
    var abstract='';
    for (var i=0; i<this.num_product.length;i++){
      abstract=abstract+'   - Caja'+(i+1).toString()+': '+ this.num_product[i].toString()+' Unidades \n\n'
    }
    abstract=abstract+''
    var product='   - Calzado :'+this.summary[0].toString() +' Pares \n\n    - Textil: '+ this.summary[1].toString() +' Unidades \n\n   - Accesorios: '+this.summary[2].toString()+ ' Unidades\n\n'
    var guide= document.getElementsByTagName('input')[document.getElementsByTagName('input').length-1].value;
    if (guide==''){
      window.alert("No se registro un numero de guia valido");
    }
    else{
      var company= document.getElementsByTagName('select')[1].value
      this.HttpBD.Send_email(this.ref,this.Numproduct,abstract,product,guide.toString(),company.toString());
      pdfMake.createPdf({content:this.content}).print();
      location.reload(true); 
      
      
    }
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
                    [{text: numBox, fontSize: 18}],
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
                    [{text: this.store_usr, bold: true}],
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
                    [{text:'CALZADO\n\n'+ (this.summary[0]-this.summary_ant[0]), color:'gray'},{text:'TEXTIL\n\n'+(this.summary[1]-this.summary_ant[1]), color:'gray'},{text:'ACCESORIO\n\n'+(this.summary[2]-this.summary_ant[2]), color:'gray'}]
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
                    [{text: this.num_product[this.num_product.length-1], fontSize: 18}],
                  ]
                },
                layout: 'noBorders'
              },
            ]
            
          ]    
        }
      });
    this.content.push({text: 'Descripcion caja '+numBox.toString(), fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]});
    this.content.push({table: {body: temp}});
    this.content.push({text: '  ', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]});  
   }*/ 

}
