import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMyPlanComponent } from './choose-my-plan.component';

describe('ChooseMyPlanComponent', () => {
  let component: ChooseMyPlanComponent;
  let fixture: ComponentFixture<ChooseMyPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseMyPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
