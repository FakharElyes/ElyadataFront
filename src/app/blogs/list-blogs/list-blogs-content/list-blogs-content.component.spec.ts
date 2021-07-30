import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlogsContentComponent } from './list-blogs-content.component';

describe('ListBlogsContentComponent', () => {
  let component: ListBlogsContentComponent;
  let fixture: ComponentFixture<ListBlogsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBlogsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBlogsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
