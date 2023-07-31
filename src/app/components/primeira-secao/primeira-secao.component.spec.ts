import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraSecaoComponent } from './primeira-secao.component';

describe('PrimeiraSecaoComponent', () => {
  let component: PrimeiraSecaoComponent;
  let fixture: ComponentFixture<PrimeiraSecaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeiraSecaoComponent]
    });
    fixture = TestBed.createComponent(PrimeiraSecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
