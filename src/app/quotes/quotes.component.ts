import { Component } from '@angular/core';
import { QuoteService, ApiQuote } from '../services/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {

  loading = false;
  error: string | null = null;
  quote: ApiQuote | null = null;

  constructor(private quotes: QuoteService) { }

getQuote() {
    this.loading = true;
    this.error = null;
    this.quote = null;

    this.quotes.getRandomQuote().subscribe({
      next: (res) => {
        this.quote = res?.[0] || null;
        this.loading = false;
      },
      error: () => {
        this.error = 'Frase no disponible, probá de nuevo en unos segundos.';
        this.loading = false;
      }
    });
  }

}
