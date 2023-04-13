import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAlertComponent } from './sale-alert.component';

describe('SaleAlertComponent', () => {
  let component: SaleAlertComponent;
  let fixture: ComponentFixture<SaleAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
