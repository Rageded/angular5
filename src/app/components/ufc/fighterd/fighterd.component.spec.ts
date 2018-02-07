import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterdComponent } from './fighterd.component';

describe('FighterdComponent', () => {
  let component: FighterdComponent;
  let fixture: ComponentFixture<FighterdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FighterdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FighterdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
