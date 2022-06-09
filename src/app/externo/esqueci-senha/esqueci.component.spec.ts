import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqueciComponent } from './esqueci.component';

describe('EsqueciComponent', () => {
  let component: EsqueciComponent;
  let fixture: ComponentFixture<EsqueciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsqueciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsqueciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
