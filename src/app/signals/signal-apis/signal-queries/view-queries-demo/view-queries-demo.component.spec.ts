import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQueriesDemoComponent } from './view-queries-demo.component';

describe('ViewQueriesDemoComponent', () => {
  let component: ViewQueriesDemoComponent;
  let fixture: ComponentFixture<ViewQueriesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewQueriesDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewQueriesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
