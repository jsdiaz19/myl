import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  ViewChild,
  HostListener,
  Directive,
  AfterViewInit
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { HttBDService} from '../../../service/Http/htt-bd.service'
import {DataService} from '../../../service/Data/data.service';

import {Router} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class AppSidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  nom=null;
  cargo=null;
  color=['#1A9D85','#C88317','#2F80B8','#2AAA63','#C6A314','#9F342B','#814E9A','#577679'];
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    private HttpBD: HttBDService,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private router: Router,
    private Data: DataService
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.nom=this.Data.GetNom();
    this.cargo=this.Data.Get_Cargo();

  }
  
  Close_session(){
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  enable(enable){
    if(enable.indexOf(this.cargo)!=-1){
      return true;
    }
    return false;
  }
}
