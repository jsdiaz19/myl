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
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    private HttpBD: HttBDService,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.nom=this.HttpBD.nom;
  }
  
  Close_session(){
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
