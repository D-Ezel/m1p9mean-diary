import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointDeliveryComponent } from './point-delivery.component';

describe('PointDeliveryComponent', () => {
  let component: PointDeliveryComponent;
  let fixture: ComponentFixture<PointDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
