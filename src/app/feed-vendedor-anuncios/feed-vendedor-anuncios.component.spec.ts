import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedVendedorAnunciosComponent } from './feed-vendedor-anuncios.component';

describe('FeedVendedorAnunciosComponent', () => {
  let component: FeedVendedorAnunciosComponent;
  let fixture: ComponentFixture<FeedVendedorAnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedVendedorAnunciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedVendedorAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
