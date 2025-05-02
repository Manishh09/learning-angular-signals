import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelApiDemoComponent } from './model-api-demo.component';

describe('ModelApiDemoComponent', () => {
  let component: ModelApiDemoComponent;
  let fixture: ComponentFixture<ModelApiDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelApiDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelApiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
