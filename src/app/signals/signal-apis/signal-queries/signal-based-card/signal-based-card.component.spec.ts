import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalBasedCardComponent } from './signal-based-card.component';

describe('SignalBasedCardComponent', () => {
  let component: SignalBasedCardComponent;
  let fixture: ComponentFixture<SignalBasedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalBasedCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalBasedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
