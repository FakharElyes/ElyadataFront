import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddownComponent } from './carddown.component';

describe('CarddownComponent', () => {
  let component: CarddownComponent;
  let fixture: ComponentFixture<CarddownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarddownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarddownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
