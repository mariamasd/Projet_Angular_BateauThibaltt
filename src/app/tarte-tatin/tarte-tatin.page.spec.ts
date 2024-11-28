import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarteTatinPage } from './tarte-tatin.page';

describe('TarteTatinPage', () => {
  let component: TarteTatinPage;
  let fixture: ComponentFixture<TarteTatinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TarteTatinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
