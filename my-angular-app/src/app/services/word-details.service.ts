import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface WordDetails {
  word: string;
  pronunciation: string;
  usage: string;
  example: string;
  origin: string;
}

@Injectable({
  providedIn: 'root'
})
export class WordDetailsService {

  private apiUrl = 'https://api.example.com/words'; // Replace with actual API endpoint

  constructor(private http: HttpClient) { }

  getWordDetails(word: string): Observable<WordDetails> {
    return this.http.get<WordDetails>(`${this.apiUrl}/${word}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
