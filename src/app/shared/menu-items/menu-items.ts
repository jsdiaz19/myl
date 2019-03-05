import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'grid', type: 'link', name: 'Pagina principal', icon: 'view_comfy',enable: ['Administrador tienda','Administrador'] },
  { state: 'view', type: 'link', name: 'Despachos', icon: 'crop_7_5',enable: ['Administrador tienda','Administrador'] },
  { state: 'starter', name: 'Crear Despacho', type: 'link', icon: 'av_timer',enable: ['Administrador tienda','Administrador'] },
  { state: 'lists', type: 'link', name: 'Presupuesto', icon: 'view_list',enable: ['Administrador tienda','Administrador','Contable'] },
  { state: 'goal', type: 'link', name: 'Meta presupuesto', icon: 'assignment_ind',enable: ['Administrador tienda','Administrador'] },
  { state: 'cost', type: 'link', name: 'Rentabilidad', icon: 'trending_up',enable: ['Administrador tienda','Administrador'] },
  { state: 'product', type: 'link', name: 'Baja rotacion', icon: 'trending_down',enable: ['Administrador tienda','Administrador'] },
  { state: 'report', type: 'link', name: 'Cierre diario', icon: 'view_headline',enable: ['Administrador tienda'] },  
  { state: 'admin', type: 'link', name: 'Balance', icon: 'trending_up',enable: ['Administrador','Contable'] },
  
  
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
