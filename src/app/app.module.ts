import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locle (IDIOMA) de la App

import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common'

registerLocaleData(localeES);


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule

  ],
  providers: [
    { provide:LOCALE_ID, useValue:'es' } //para proveer el idioma a nivel global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
