import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionDespachoComponent } from './description-despacho.component';

describe('DescriptionDespachoComponent', () => {
  let component: DescriptionDespachoComponent;
  let fixture: ComponentFixture<DescriptionDespachoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionDespachoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionDespachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
