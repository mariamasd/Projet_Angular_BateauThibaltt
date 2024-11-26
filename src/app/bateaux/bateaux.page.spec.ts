import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BateauxPage } from './bateaux.page';

describe('BateauxPage', () => {
  let component: BateauxPage;
  let fixture: ComponentFixture<BateauxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BateauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
