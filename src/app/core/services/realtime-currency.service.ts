import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealtimeCurrencyService {

  apiQuote = 'https://economia.awesomeapi.com.br/json';

  constructor(private http: HttpClient) { }

  getAllQuotes() {
    return this.http.get<any>(`${this.apiQuote}/all`).pipe();
  }

  getDailyQuotes(currency: string, numberOfDays: number) {
    return this.http.get<any>(`${this.apiQuote}/daily/${currency}/${numberOfDays}`).pipe();
  }

  getQuotesByDay(currency: string, number: number) {
    return this.http.get<any>(`${this.apiQuote}/${currency}/${number}`).pipe();
  }

}
