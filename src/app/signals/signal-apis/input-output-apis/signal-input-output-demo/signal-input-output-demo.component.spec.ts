import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalInputOutputDemoComponent } from './signal-input-output-demo.component';

 
describe('SignalInputOutputDemoComponent', () => {
  let component: SignalInputOutputDemoComponent;
  let fixture: ComponentFixture<SignalInputOutputDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalInputOutputDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalInputOutputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
