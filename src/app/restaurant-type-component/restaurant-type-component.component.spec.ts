import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTypeComponentComponent } from './restaurant-type-component.component';

describe('RestaurantTypeComponentComponent', () => {
  let component: RestaurantTypeComponentComponent;
  let fixture: ComponentFixture<RestaurantTypeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantTypeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantTypeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
