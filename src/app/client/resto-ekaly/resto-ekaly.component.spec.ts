import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoEkalyComponent } from './resto-ekaly.component';

describe('RestoEkalyComponent', () => {
  let component: RestoEkalyComponent;
  let fixture: ComponentFixture<RestoEkalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoEkalyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoEkalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
