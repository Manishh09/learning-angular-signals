import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushCdDemoTwoComponent } from './onpush-cd-demo-two.component';

describe('OnpushCdDemoTwoComponent', () => {
  let component: OnpushCdDemoTwoComponent;
  let fixture: ComponentFixture<OnpushCdDemoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnpushCdDemoTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnpushCdDemoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
