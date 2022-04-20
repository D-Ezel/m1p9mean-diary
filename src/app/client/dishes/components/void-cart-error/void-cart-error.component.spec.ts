import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidCartErrorComponent } from './void-cart-error.component';

describe('VoidCartErrorComponent', () => {
  let component: VoidCartErrorComponent;
  let fixture: ComponentFixture<VoidCartErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoidCartErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidCartErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
