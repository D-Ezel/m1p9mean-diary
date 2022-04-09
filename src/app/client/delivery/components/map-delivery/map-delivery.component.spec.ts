import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDeliveryComponent } from './map-delivery.component';

describe('MapDeliveryComponent', () => {
  let component: MapDeliveryComponent;
  let fixture: ComponentFixture<MapDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
