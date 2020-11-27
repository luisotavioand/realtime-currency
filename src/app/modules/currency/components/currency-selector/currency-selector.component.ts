import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { RealtimeCurrencyService } from 'src/app/core/services/realtime-currency.service';
import { CurrencyData } from 'src/app/core/models/CurrencyData.model';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit {

  @Output() emitCurrency = new EventEmitter();

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  currencyTypes: Array<any> = [];
  currencyData: CurrencyData;

  subscription: Subscription;

  constructor(private realtimeCurrencyService: RealtimeCurrencyService) { }

  async ngOnInit() {
    this.currencyData = new CurrencyData();
    this.subscription = this.realtimeCurrencyService.getAllQuotes().subscribe(
      (resp) => {
        this.currencyData = resp;
        console.log(this.currencyData);
        this.definirCurrencyTypes();
      }
    );
  }

  definirCurrencyTypes() {
    // this.currencyTypes = Object.keys(CurrencyType).filter((type) => {
    //   return isNaN(type as any) && type !== 'values';
    // });
    this.currencyTypes = Object.keys(this.currencyData).map((type) => {
        return { code: this.currencyData[type].code,
          ask: this.currencyData[type].ask,
          name: this.currencyData[type].name
        };
      });
  }

  onClickNext() {
    const selector = document.getElementById('currency-selector');
    selector.scrollBy(-100, 0);
  }

  onClickBack() {
    const selector = document.getElementById('currency-selector');
    selector.scrollBy(100, 0);
  }

  async onEmitAtivacaoCard(event) {
    this.emitCurrency.emit(event);
  }

}
