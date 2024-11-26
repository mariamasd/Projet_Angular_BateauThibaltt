import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaphirPage } from './saphir.page';

describe('SaphirPage', () => {
  let component: SaphirPage;
  let fixture: ComponentFixture<SaphirPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SaphirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
