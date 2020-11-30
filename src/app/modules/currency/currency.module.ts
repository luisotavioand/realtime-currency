import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { RealtimeQuoteComponent } from './pages/realtime-quote/realtime-quote.component';
import { CurrencySelectorComponent } from './components/currency-selector/currency-selector.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { HistoryComponent } from './pages/history/history.component';
import { CurrencyComparativeComponent } from './components/currency-comparative/currency-comparative.component';
import { CurrencyDailyStatsComponent } from './components/currency-daily-stats/currency-daily-stats.component';

@NgModule({
  declarations: [
    RealtimeQuoteComponent,
    CurrencySelectorComponent,
    HistoryComponent,
    CurrencyComparativeComponent,
    CurrencyDailyStatsComponent
  ],
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
