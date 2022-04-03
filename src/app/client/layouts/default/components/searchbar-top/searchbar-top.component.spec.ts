import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarTopComponent } from './searchbar-top.component';

describe('SearchbarTopComponent', () => {
  let component: SearchbarTopComponent;
  let fixture: ComponentFixture<SearchbarTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbarTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
