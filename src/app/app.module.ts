import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PrimeiraSecaoComponent } from './components/primeira-secao/primeira-secao.component';
import { SegundaSecaoComponent } from './components/segunda-secao/segunda-secao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrimeiraSecaoComponent,
    SegundaSecaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
