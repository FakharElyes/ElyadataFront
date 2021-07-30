import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlogsAuthorComponent } from './list-blogs-author.component';

describe('ListBlogsAuthorComponent', () => {
  let component: ListBlogsAuthorComponent;
  let fixture: ComponentFixture<ListBlogsAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBlogsAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBlogsAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
