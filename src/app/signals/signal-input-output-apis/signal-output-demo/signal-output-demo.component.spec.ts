import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalOutputDemoComponent } from './signal-output-demo.component';

describe('SignalOutputDemoComponent', () => {
  let component: SignalOutputDemoComponent;
  let fixture: ComponentFixture<SignalOutputDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalOutputDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalOutputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
