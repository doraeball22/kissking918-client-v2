import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Free50Component } from './free50.component';

describe('Free50Component', () => {
  let component: Free50Component;
  let fixture: ComponentFixture<Free50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Free50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Free50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
