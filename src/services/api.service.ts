import { UtilsService } from './utils.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { tap, catchError } from 'rxjs/operators';
//import { Nozione}from "../models/nozione";
//import { Argomento }from "../models/argomento";
import { Materia}from "../models/materia";

@Injectable() 
export class ApiService{
    constructor(private http: HttpClient) { }

    private url = 'https://www.antoniodecusati.it/connDb/project/AppStudio/api/';

    private urlFactory = UtilsService.urlFactory(this.url);

    private errorHandler(err) {
        console.error(err);
        return of(err);
    }

    buildUrl<T>(...args): Observable<any> {
        return this.http.get<T>(this.urlFactory(...args))
            .pipe(
                catchError(this.errorHandler),
                tap(res => console.log(res))
            );
    }

    getUrl<T>(url: string, params?: HttpParams): Observable<any> {
        return this.http.get<T>(url, {params})
            .pipe(
                catchError(this.errorHandler),
                tap(res => console.log(res))
            );
    }

    getMaterie(): Observable<Materia | Materia[]> {
        return this.buildUrl<Materia | Materia[]>('getAllMaterie.php');
    }
}