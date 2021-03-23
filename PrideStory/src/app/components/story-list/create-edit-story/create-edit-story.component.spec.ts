import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditStoryComponent } from './create-edit-story.component';

describe('CreateEditStoryComponent', () => {
  let component: CreateEditStoryComponent;
  let fixture: ComponentFixture<CreateEditStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
