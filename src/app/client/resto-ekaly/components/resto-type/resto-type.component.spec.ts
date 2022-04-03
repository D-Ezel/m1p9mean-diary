import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoTypeComponent } from './resto-type.component';

describe('RestoTypeComponent', () => {
  let component: RestoTypeComponent;
  let fixture: ComponentFixture<RestoTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
