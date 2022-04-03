import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoSortingComponent } from './resto-sorting.component';

describe('RestoSortingComponent', () => {
  let component: RestoSortingComponent;
  let fixture: ComponentFixture<RestoSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
