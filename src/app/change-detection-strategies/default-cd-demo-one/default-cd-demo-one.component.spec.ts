import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCdDemoOneComponent } from './default-cd-demo-one.component';

describe('DefaultCdDemoOneComponent', () => {
  let component: DefaultCdDemoOneComponent;
  let fixture: ComponentFixture<DefaultCdDemoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCdDemoOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultCdDemoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
