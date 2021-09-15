import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveQuoteLoginComponent } from './retrieve-quote-login.component';

describe('RetrieveQuoteLoginComponent', () => {
  let component: RetrieveQuoteLoginComponent;
  let fixture: ComponentFixture<RetrieveQuoteLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveQuoteLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveQuoteLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
