import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushCdDemoOneComponent } from './onpush-cd-demo-one.component';

describe('OnpushCdDemoOneComponent', () => {
  let component: OnpushCdDemoOneComponent;
  let fixture: ComponentFixture<OnpushCdDemoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnpushCdDemoOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnpushCdDemoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
