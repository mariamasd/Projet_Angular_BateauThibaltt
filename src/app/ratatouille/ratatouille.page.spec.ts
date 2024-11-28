import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RatatouillePage } from './ratatouille.page';

describe('RatatouillePage', () => {
  let component: RatatouillePage;
  let fixture: ComponentFixture<RatatouillePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RatatouillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
