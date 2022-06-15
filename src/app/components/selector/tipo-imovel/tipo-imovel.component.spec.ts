import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoImovelComponent } from './tipo-imovel.component';

describe('TipoImovelComponent', () => {
  let component: TipoImovelComponent;
  let fixture: ComponentFixture<TipoImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoImovelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
