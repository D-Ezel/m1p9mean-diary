import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesCategoryComponent } from './dishes-category.component';

describe('DishesCategoryComponent', () => {
  let component: DishesCategoryComponent;
  let fixture: ComponentFixture<DishesCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishesCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
