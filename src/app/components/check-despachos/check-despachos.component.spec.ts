import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDespachoComponent } from './check-despachos.component';

describe('CheckComponent', () => {
  let component: CheckDespachoComponent;
  let fixture: ComponentFixture<CheckDespachoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckDespachoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
