import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'starter', name: 'Pagina Principal', type: 'link', icon: 'av_timer' },
  { state: 'button', type: 'link', name: 'Despachos', icon: 'crop_7_5' },
  { state: 'grid', type: 'link', name: 'Crear despacho', icon: 'view_comfy' },
  { state: 'lists', type: 'link', name: 'Informacion Personal', icon: 'view_list' },
  { state: 'menu', type: 'link', name: 'About', icon: 'view_headline' },
  
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
