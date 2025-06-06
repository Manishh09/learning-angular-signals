import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentQueriesDemoComponent } from './content-queries-demo.component';

describe('ContentQueriesDemoComponent', () => {
  let component: ContentQueriesDemoComponent;
  let fixture: ComponentFixture<ContentQueriesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentQueriesDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentQueriesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
