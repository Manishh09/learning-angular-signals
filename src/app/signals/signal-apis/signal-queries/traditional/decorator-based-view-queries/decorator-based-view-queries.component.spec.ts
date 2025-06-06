import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorBasedViewQueriesComponent } from './decorator-based-view-queries.component';

describe('DecoratorBasedViewQueriesComponent', () => {
  let component: DecoratorBasedViewQueriesComponent;
  let fixture: ComponentFixture<DecoratorBasedViewQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecoratorBasedViewQueriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoratorBasedViewQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
