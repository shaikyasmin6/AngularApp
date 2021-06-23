import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalisedgiftsComponent } from './personalisedgifts.component';

describe('PersonalisedgiftsComponent', () => {
  let component: PersonalisedgiftsComponent;
  let fixture: ComponentFixture<PersonalisedgiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalisedgiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalisedgiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
