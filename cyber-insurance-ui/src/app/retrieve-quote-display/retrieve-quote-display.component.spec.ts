import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveQuoteDisplayComponent } from './retrieve-quote-display.component';

describe('RetrieveQuoteDisplayComponent', () => {
  let component: RetrieveQuoteDisplayComponent;
  let fixture: ComponentFixture<RetrieveQuoteDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveQuoteDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveQuoteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
