import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeclarationComponent } from './view-declaration.component';

describe('ViewDeclarationComponent', () => {
  let component: ViewDeclarationComponent;
  let fixture: ComponentFixture<ViewDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
