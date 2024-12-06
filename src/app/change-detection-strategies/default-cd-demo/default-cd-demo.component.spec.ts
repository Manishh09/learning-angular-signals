import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCdDemoComponent } from './default-cd-demo.component';

describe('DefaultCdDemoComponent', () => {
  let component: DefaultCdDemoComponent;
  let fixture: ComponentFixture<DefaultCdDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCdDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultCdDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
