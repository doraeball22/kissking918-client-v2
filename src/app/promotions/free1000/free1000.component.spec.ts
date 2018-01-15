import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Free1000Component } from './free1000.component';

describe('Free1000Component', () => {
  let component: Free1000Component;
  let fixture: ComponentFixture<Free1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Free1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Free1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
