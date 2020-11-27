import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-currency-quote-card',
  templateUrl: './currency-quote-card.component.html',
  styleUrls: ['./currency-quote-card.component.css']
})
export class CurrencyQuoteCardComponent implements OnInit {

  faWallet = faWallet;

  @Input() currencyName: string;
  @Input() currencyValue: number;
  @Input() currencyAbbreviation: string;
  @Input() activeCard = false;
  @Output() emiteAtivacao: any =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click') onClick() {
    this.activeCard = !this.activeCard;
    this.emiteAtivacao.emit(this.currencyAbbreviation);
  }
}
