import { RealtimeCurrencyService } from 'src/app/core/services/realtime-currency.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-currency-daily-stats',
  templateUrl: './currency-daily-stats.component.html',
  styleUrls: ['./currency-daily-stats.component.css']
})
export class CurrencyDailyStatsComponent implements OnInit, OnChanges {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Currency' },
  ];
  public lineChartLabels: Label[] = ['0', '1', '2', '3',
          '4', '5', '6', '7', '8', '9', '10', '11', '12',
          '13', '14', '15', '16', '17', '18', '19'];
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#7ACCB1',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  @Input() currencyCode: string;
  currencyData: Array<any>;
  numberOfDays = 20;

  constructor(private realtimeCurrencyService: RealtimeCurrencyService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currencyCode) {
      if (this.currencyCode) {
        this.getCurrencyData();
      }
    }
  }

  async getCurrencyData() {
    this.spinner.show();
    await this.realtimeCurrencyService.getQuotesByDay(this.currencyCode + '-BRL', this.numberOfDays).toPromise().then(
      (resp) => {
        this.currencyData = resp;
        this.lineChartLabels = [];
        const values: Array<any> = this.currencyData.map((data) => {
          this.lineChartLabels.push(new Date(data.timestamp * 1000).toLocaleTimeString());
          return parseFloat(data.ask);
        });
        this.lineChartData = [
          { data: values, label: `${this.currencyCode}` },
        ];
        this.lineChartData.reverse();
        this.lineChartLabels.reverse();
        this.spinner.hide();
      }
    ).catch((err) => {
      this.spinner.hide();
    });
  }

  onClickFilterChart(numberOfDays: number) {
    this.numberOfDays = numberOfDays;
    this.getCurrencyData();
  }

}
