import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoPopularComponent } from './resto-popular.component';

describe('RestoPopularComponent', () => {
  let component: RestoPopularComponent;
  let fixture: ComponentFixture<RestoPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoPopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
