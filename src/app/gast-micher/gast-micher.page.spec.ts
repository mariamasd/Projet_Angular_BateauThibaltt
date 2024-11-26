import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GastMicherPage } from './gast-micher.page';

describe('GastMicherPage', () => {
  let component: GastMicherPage;
  let fixture: ComponentFixture<GastMicherPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GastMicherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
