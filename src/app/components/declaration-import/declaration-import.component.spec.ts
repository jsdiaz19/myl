import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationImportComponent } from './declaration-import.component';

describe('DeclarationImportComponent', () => {
  let component: DeclarationImportComponent;
  let fixture: ComponentFixture<DeclarationImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
