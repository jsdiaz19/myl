import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'grid', type: 'link', name: 'Pagina principal', icon: 'view_comfy' },
  { state: 'button', type: 'link', name: 'Despachos', icon: 'crop_7_5' },
  { state: 'starter', name: 'Crear Despacho', type: 'link', icon: 'av_timer' },
  { state: 'lists', type: 'link', name: 'Informacion Personal', icon: 'view_list' },
  { state: 'menu', type: 'link', name: 'About', icon: 'view_headline' },
  
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
