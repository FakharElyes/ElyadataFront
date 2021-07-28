import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardupComponent } from './cardup.component';

describe('CardupComponent', () => {
  let component: CardupComponent;
  let fixture: ComponentFixture<CardupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
