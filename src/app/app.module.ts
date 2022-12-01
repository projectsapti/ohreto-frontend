import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VentasComponent } from './ventas/ventas.component';
import { VentasService } from './ventas/ventas.service';
import { DetalleVentaComponent } from './ventas/detalle-venta/detalle-venta.component';

registerLocaleData(localeES, 'es');

const routes: Routes = [
  { path: '', redirectTo: '/ventas', pathMatch: 'full' },    
  { path: 'ventas', component: VentasComponent },
  { path: 'ventas/page/:page', component: VentasComponent },  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,      
    PaginatorComponent,    
    DetalleVentaComponent,           
    VentasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule, MatDatepickerModule, MatMomentDateModule,
    ReactiveFormsModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule
  ],
  providers: [VentasService,
    { provide: LOCALE_ID, useValue: 'es' },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
