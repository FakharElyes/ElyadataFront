import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlogsTitleComponent } from './list-blogs-title.component';

describe('ListBlogsTitleComponent', () => {
  let component: ListBlogsTitleComponent;
  let fixture: ComponentFixture<ListBlogsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBlogsTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBlogsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
