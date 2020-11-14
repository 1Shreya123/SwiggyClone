import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiggyTitleComponent } from './swiggy-title.component';

describe('SwiggyTitleComponent', () => {
  let component: SwiggyTitleComponent;
  let fixture: ComponentFixture<SwiggyTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiggyTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiggyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
