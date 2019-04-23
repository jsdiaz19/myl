import { Injectable } from '@angular/core';
import {DataService } from '../Data/data.service';
@Injectable({
  providedIn: 'root'
})
export class PDFdespachoService {
  Content=[];
  countBox=1;
  constructor( private Data: DataService) { }

  AddBox(box,Fromstore,Tostore,inv,CountProduct){
    this.Content.push(
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
                    [{text: this.Data.GetStore(), bold: true}],
                    ['FECHA:'+new Date().getDate()+'/'+(new Date().getMonth()+1).toString()+'/'+new Date().getFullYear()],
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
                    [{text: this.countBox.toString(), fontSize: 18}],
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
                    [{text: Tostore, bold: true}],
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
                    [{text:'CALZADO\n\n'+inv.get('CALZADO').toString(), color:'gray'},{text:'TEXTIL\n\n'+inv.get('TEXTIL').toString(), color:'gray'},{text:'ACCESORIO\n\n'+inv.get('ACCESORIO').toString(), color:'gray'}]
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
                    [{text: CountProduct.toString(), fontSize: 18}],
                  ]
                },
                layout: 'noBorders'
              },
            ]
            
          ]    
        }
      });
    this.Content.push({text: 'Descripcion caja '+this.countBox.toString(), fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]});
    this.Content.push({table: {body: box}});
    this.Content.push({text: '  ', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8]});  
    this.countBox+=1;
  }
  
  GetBox(){
    return this.Content;
  }
}
