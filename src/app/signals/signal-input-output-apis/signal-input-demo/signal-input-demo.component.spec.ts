import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInputDemoComponent } from './signal-input-demo.component';

describe('SignalInputDemoComponent', () => {
  let component: SignalInputDemoComponent;
  let fixture: ComponentFixture<SignalInputDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalInputDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalInputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
