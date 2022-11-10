import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarjetaCredito } from '../models/tarjetaCredito';

@Injectable({
  providedIn: 'root',
})
export class TarjetaService {
  myAppUrl = 'https://localhost:7107/';
  myApiUrl = 'api/TargetaCredito/';
  constructor(private http: HttpClient) {}

  guardarTarjeta(tarjeta: TarjetaCredito): Observable<TarjetaCredito> {
    return this.http.post<TarjetaCredito>(
      this.myAppUrl + this.myApiUrl,
      tarjeta
    );
  }
}
