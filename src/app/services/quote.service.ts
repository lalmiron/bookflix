import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiQuote {
  quote: string;
  author: string;
  category?: string;
}

@Injectable({
  providedIn: 'root'
})


export class QuoteService {
  baseUrl = 'https://api.api-ninjas.com/v1/quotes';

  constructor(private http: HttpClient) {}

  getRandomQuote(category?: string): Observable<ApiQuote[]> {
    const headers = new HttpHeaders({ 'X-Api-Key': environment.apiNinjasKey });
    return this.http.get<ApiQuote[]>(this.baseUrl, { headers });
  }
}
