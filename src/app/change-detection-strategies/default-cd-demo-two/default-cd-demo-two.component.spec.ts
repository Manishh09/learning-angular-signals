import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCdDemoTwoComponent } from './default-cd-demo-two.component';

describe('DefaultCdDemoTwoComponent', () => {
  let component: DefaultCdDemoTwoComponent;
  let fixture: ComponentFixture<DefaultCdDemoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCdDemoTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultCdDemoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
