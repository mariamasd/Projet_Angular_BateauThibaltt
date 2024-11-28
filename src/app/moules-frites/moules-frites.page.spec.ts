import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoulesFritesPage } from './moules-frites.page';

describe('MoulesFritesPage', () => {
  let component: MoulesFritesPage;
  let fixture: ComponentFixture<MoulesFritesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MoulesFritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
