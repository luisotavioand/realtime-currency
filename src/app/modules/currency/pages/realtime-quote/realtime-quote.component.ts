import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-realtime-quote',
  templateUrl: './realtime-quote.component.html',
  styleUrls: ['./realtime-quote.component.css']
})
export class RealtimeQuoteComponent implements OnInit {

  currencySelected: string;

  ngOnInit() {
  }

  onEmitCurrencySelection(event) {
    this.currencySelected = event;
  }

}
