import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HttpClientModule } from '@angular/common/http';
import { FiltreComponent } from './filtre/filtre.component';



@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    FiltreComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
