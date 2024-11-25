import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GerantPage } from './gerant.page';

describe('GerantPage', () => {
  let component: GerantPage;
  let fixture: ComponentFixture<GerantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GerantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
