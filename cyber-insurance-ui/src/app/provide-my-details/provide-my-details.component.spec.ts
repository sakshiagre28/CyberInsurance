import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideMyDetailsComponent } from './provide-my-details.component';

describe('ProvideMyDetailsComponent', () => {
  let component: ProvideMyDetailsComponent;
  let fixture: ComponentFixture<ProvideMyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvideMyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideMyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
