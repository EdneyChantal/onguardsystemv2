/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PortariaComponent } from './portaria.component';

describe('PortariaComponent', () => {
  let component: PortariaComponent;
  let fixture: ComponentFixture<PortariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
