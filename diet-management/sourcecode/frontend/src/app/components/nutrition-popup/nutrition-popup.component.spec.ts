import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionPopupComponent } from './nutrition-popup.component';

describe('NutritionPopupComponent', () => {
  let component: NutritionPopupComponent;
  let fixture: ComponentFixture<NutritionPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
