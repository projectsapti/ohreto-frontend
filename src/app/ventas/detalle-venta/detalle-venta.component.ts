import { Component, OnInit } from '@angular/core';
import { Venta } from '../models/venta';
import { VentasService } from '../ventas.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { URL_BACKEND } from '../../config/config';
@Component({
  selector: 'app-ventas',
  templateUrl: './detalle-venta.component.html'
})
export class DetalleVentaComponent implements OnInit {

  
  constructor(
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   
    
  }

}
