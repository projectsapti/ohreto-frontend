import { Injectable } from '@angular/core';
import { Venta } from '../ventas/models/venta';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Router } from '@angular/router';

import { URL_BACKEND } from '../config/config';

@Injectable()
export class VentasService {
  private urlEndPoint: string = URL_BACKEND + '/api/ventas';

  constructor(private http: HttpClient, private router: Router) { }

 
  getVentas(page: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      tap((response: any) => {        
        (response.content as Venta[]).forEach(cliente => console.log(cliente));
      }),
      map((response: any) => {
        (response.content as Venta[]).map(cliente => {
          //cliente.nombre = cliente.nombre.toUpperCase();
          return cliente;
        });
        return response;
      }),
      tap(response => {
        (response.content as Venta[]).forEach(cliente => console.log(cliente));
      }));
  }

  
 
}
