import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempConverter } from './temp-converter';

describe('TempConverterComponent', () => {
  let component: TempConverter;
  let fixture: ComponentFixture<TempConverter>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TempConverter]
    });

    fixture = TestBed.createComponent(TempConverter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers', () => {
    component.add('10', '5');
    expect(component.result).toBe(15);
  });

  it('should subtract two numbers', () => {
    component.subtract('10', '5');
    expect(component.result).toBe(5);
  });

  it('should multiply two numbers', () => {
    component.multiply('10', '5');
    expect(component.result).toBe(50);
  });

  it('should divide two numbers', () => {
    component.divide('10', '5');
    expect(component.result).toBe(2);
  });
});