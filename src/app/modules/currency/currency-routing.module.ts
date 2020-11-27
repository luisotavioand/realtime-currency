import { HistoryComponent } from './pages/history/history.component';
import { RealtimeQuoteComponent } from './pages/realtime-quote/realtime-quote.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path : 'realtime', component: RealtimeQuoteComponent },
  { path : 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
