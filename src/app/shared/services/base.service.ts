import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(public http: HttpClient) { }

   //  customize the error handling here
   private handleError(error: HttpErrorResponse) {
    return throwError(() => {
        const errorMessage = error.error.message ? error.error.message : error.message;
        return new Error(errorMessage);
    });
}

// Variable and constructor declaration ends
get(url: string, data?: any): Observable<any> {
    // this.spinner.show();
    return this.http.get(`${url}`, { params: data }).pipe(
        catchError(this.handleError),
        finalize(() => {
            // Hide the spinner when the request is complete (success or error)
            // this.spinner.hide();
        })
    );
}
post(url: string, data: any): Observable<any> {
    // this.spinner.show();
    return this.http
        .post(`${url}`, data)
        .pipe(catchError(this.handleError),
            finalize(() => {
                // Hide the spinner when the request is complete (success or error)
                // this.spinner.hide();
            }));
}
put(url: string, data: any): Observable<any> {
    // this.spinner.show();
    return this.http
        .put(`${url}`, data)
        .pipe(catchError(this.handleError),
            finalize(() => {
                // Hide the spinner when the request is complete (success or error)
                // this.spinner.hide();
            }));
}
delete(url: string): Observable<any> {
    // this.spinner.show();
    return this.http
        .delete(`${url}`)
        .pipe(catchError(this.handleError),
            finalize(() => {
                // Hide the spinner when the request is complete (success or error)
                // this.spinner.hide();
            }));
}
}
