import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeLaBrisePage } from './de-la-brise.page';

describe('DeLaBrisePage', () => {
  let component: DeLaBrisePage;
  let fixture: ComponentFixture<DeLaBrisePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeLaBrisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
