import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoOthersComponent } from './resto-others.component';

describe('RestoOthersComponent', () => {
  let component: RestoOthersComponent;
  let fixture: ComponentFixture<RestoOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
