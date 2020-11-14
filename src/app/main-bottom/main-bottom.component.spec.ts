import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBottomComponent } from './main-bottom.component';

describe('MainBottomComponent', () => {
  let component: MainBottomComponent;
  let fixture: ComponentFixture<MainBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
