import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AquilonPage } from './aquilon.page';

describe('AquilonPage', () => {
  let component: AquilonPage;
  let fixture: ComponentFixture<AquilonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AquilonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
