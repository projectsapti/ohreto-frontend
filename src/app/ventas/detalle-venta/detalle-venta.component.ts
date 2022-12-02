import { Component, OnInit,Input } from '@angular/core';
import { Venta } from '../models/venta';
import { VentasService } from '../ventas.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { URL_BACKEND } from '../../config/config';
import swal from 'sweetalert2';
import { ModalDetalleService } from './modal-detalle.service';
@Component({
  selector: 'detalle-venta',
  templateUrl: './detalle-venta.component.html'
})
export class DetalleVentaComponent implements OnInit {

  @Input() venta: Venta;
  constructor(
    private activatedRoute: ActivatedRoute,
    public modalDetalleService: ModalDetalleService) { }

  ngOnInit() {
   
    
  }

  cerrarModal() {
    this.modalDetalleService.cerrarModal();
    
  }
}
