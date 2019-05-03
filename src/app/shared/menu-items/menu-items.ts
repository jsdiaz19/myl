import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  index: number;
}

const MENUITEMS = [
  { state: 'grid', type: 'link', name: 'Pagina Principal', icon: 'dashboard',enable: ['Administrador tienda','Administrador','Supervisor'], index:0 },
  { state: 'view', type: 'link', name: 'Despachos', icon: 'shopping_cart',enable: ['Administrador tienda','Administrador'], index:1 },
  { state: 'starter', name: 'Crear Despacho', type: 'link', icon: 'folder',enable: ['Administrador tienda','Administrador'],index:2 },
  { state: 'lists', type: 'link', name: 'Presupuesto', icon: 'attach_money',enable: ['Administrador tienda','Administrador','Contable','Supervisor','Recursos humanos'],index:3 },
  { state: 'goal', type: 'link', name: 'Meta Presupuesto', icon: 'work',enable: ['Administrador tienda','Administrador','Supervisor','Recursos humanos'],index:4 },
  { state: 'cost', type: 'link', name: 'Rentabilidad', icon: 'trending_up',enable: ['Administrador tienda','Administrador','Supervisor','Recursos humanos'],index:5 },
  { state: 'product', type: 'link', name: 'Baja Rotacion', icon: 'trending_down',enable: ['Administrador tienda','Administrador','Supervisor'],index:6 },
  { state: 'report', type: 'link', name: 'Cierre Diario', icon: 'view_headline',enable: ['Administrador tienda','Administrador'],index:7 },  
  { state: 'admin', type: 'link', name: 'Balance', icon: 'trending_up',enable: ['Administrador','Contable'],index:8 },
  { state: 'control', type: 'link', name: 'Nomina', icon: 'account_balance_wallet',enable: ['Recursos humanos'],index:8 },
  { state: 'position', type: 'link', name: 'Cargos', icon: 'perm_identity',enable: ['Administrador'],index:8 },
  { state: 'import', type: 'link', name: 'Declaracion', icon: 'book',enable: ['Administrador'],index:8 },
  { state: 'download', type: 'link', name: 'Declaracion', icon: 'backup',enable: ['Administrador tienda'],index:8 },
  
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
