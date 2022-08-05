import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvidarAmigoComponent } from './convidar-amigo.component';

describe('ConvidarAmigoComponent', () => {
  let component: ConvidarAmigoComponent;
  let fixture: ComponentFixture<ConvidarAmigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvidarAmigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvidarAmigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
