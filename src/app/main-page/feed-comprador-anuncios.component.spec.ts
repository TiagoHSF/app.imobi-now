import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCompradorAnunciosComponent } from './feed-comprador-anuncios.component';

describe('FeedCompradorAnunciosComponent', () => {
  let component: FeedCompradorAnunciosComponent;
  let fixture: ComponentFixture<FeedCompradorAnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedCompradorAnunciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedCompradorAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
