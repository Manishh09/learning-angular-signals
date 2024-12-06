import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutSignalsDemoComponent } from './without-signals-demo.component';

describe('WithoutSignalsDemoComponent', () => {
  let component: WithoutSignalsDemoComponent;
  let fixture: ComponentFixture<WithoutSignalsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithoutSignalsDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithoutSignalsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
