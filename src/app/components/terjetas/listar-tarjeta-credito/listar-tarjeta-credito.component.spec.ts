import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTarjetaCreditoComponent } from './listar-tarjeta-credito.component';

describe('ListarTarjetaCreditoComponent', () => {
  let component: ListarTarjetaCreditoComponent;
  let fixture: ComponentFixture<ListarTarjetaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTarjetaCreditoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTarjetaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
