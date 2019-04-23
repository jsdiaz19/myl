import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowSalesProductComponent } from './low-sales-product.component';

describe('LowSalesProductComponent', () => {
  let component: LowSalesProductComponent;
  let fixture: ComponentFixture<LowSalesProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowSalesProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowSalesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
