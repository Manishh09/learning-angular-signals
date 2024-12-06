import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushCdDemoComponent } from './onpush-cd-demo.component';

describe('OnpushCdDemoComponent', () => {
  let component: OnpushCdDemoComponent;
  let fixture: ComponentFixture<OnpushCdDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnpushCdDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnpushCdDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
