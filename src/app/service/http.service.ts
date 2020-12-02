import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient) { }

  getKida(): Observable<string> {
    return this._http.get(`${this.baseUrl}/kida`, {responseType: 'text'});
  }
}
