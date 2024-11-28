import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BouillabaissePage } from './bouillabaisse.page';

describe('BouillabaissePage', () => {
  let component: BouillabaissePage;
  let fixture: ComponentFixture<BouillabaissePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BouillabaissePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
