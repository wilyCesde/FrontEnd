import { TarjetaService } from './../../../services/tarjeta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarjeta-credito',
  templateUrl: './listar-tarjeta-credito.component.html',
  styleUrls: ['./listar-tarjeta-credito.component.css'],
})
export class ListarTarjetaCreditoComponent implements OnInit {
  constructor(public tarjetaService: TarjetaService) {}

  ngOnInit(): void {
    this.tarjetaService.obtenerTarjetas();
  }
}
