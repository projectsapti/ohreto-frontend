import { Component, OnInit } from '@angular/core';
import { Venta } from './models/venta';
import { VentasService } from './ventas.service';
import { ModalDetalleService } from './detalle-venta/modal-detalle.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { URL_BACKEND } from '../config/config';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html'
})
export class VentasComponent implements OnInit {

  ventas: Venta[];
  paginador: any;
  ventaSeleccionado: Venta;
  urlBackend: string = URL_BACKEND;

  constructor(private ventasService: VentasService,
    public modalDetalleService: ModalDetalleService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.ventasService.getVentas(page)
        .pipe(
          tap(response => {
            (response.content as Venta[]).forEach(cliente => console.log(cliente));
          })
        ).subscribe(response => {
          this.ventas = response.content as Venta[];
          this.paginador = response;
        });
    });    
  }


  abrirModal(venta: Venta) {
    console.log(venta)
    this.ventaSeleccionado = venta;
    this.modalDetalleService.abrirModal();
  }
}
