import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorBasedContentQueriesComponent } from './decorator-based-content-queries.component';

describe('DecoratorBasedContentQueriesComponent', () => {
  let component: DecoratorBasedContentQueriesComponent;
  let fixture: ComponentFixture<DecoratorBasedContentQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecoratorBasedContentQueriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoratorBasedContentQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
