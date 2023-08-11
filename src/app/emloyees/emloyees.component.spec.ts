import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmloyeesComponent } from './emloyees.component';

describe('EmloyeesComponent', () => {
  let component: EmloyeesComponent;
  let fixture: ComponentFixture<EmloyeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmloyeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmloyeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
