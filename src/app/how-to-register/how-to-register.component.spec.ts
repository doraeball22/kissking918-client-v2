import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToRegisterComponent } from './how-to-register.component';

describe('HowToRegisterComponent', () => {
  let component: HowToRegisterComponent;
  let fixture: ComponentFixture<HowToRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
