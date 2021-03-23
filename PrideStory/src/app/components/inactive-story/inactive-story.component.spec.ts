import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveStoryComponent } from './inactive-story.component';

describe('InactiveStoryComponent', () => {
  let component: InactiveStoryComponent;
  let fixture: ComponentFixture<InactiveStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
