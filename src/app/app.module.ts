import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CurrencyModule } from './modules/currency/currency.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    CurrencyModule,
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
