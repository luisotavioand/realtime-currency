import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { RealtimeQuoteComponent } from './pages/realtime-quote/realtime-quote.component';
import { CurrencySelectorComponent } from './components/currency-selector/currency-selector.component';
import { CurrencyQuoteCardComponent } from './components/currency-quote-card/currency-quote-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrencyHistoryComponent } from './components/currency-history/currency-history.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { HistoryComponent } from './pages/history/history.component';

@NgModule({
  declarations: [RealtimeQuoteComponent, CurrencySelectorComponent, CurrencyQuoteCardComponent, CurrencyHistoryComponent, HistoryComponent],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    FontAwesomeModule,
    ChartsModule,
    NgxSpinnerModule
  ],
  providers: [ThemeService, NgxSpinnerService]
})
export class CurrencyModule { }
