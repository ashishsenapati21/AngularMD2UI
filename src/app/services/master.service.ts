import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { env } from './env';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getCountryList(code?) {
    let url = `${env.MASTER}/country-list`;
    if (code) {
      url = `${env.MASTER}/country-list?CODE=${code}`;
    }
    return this.http.get(url).toPromise().then(result => {
      return result;
    });
  }

  createUserAccount(data) {
    let url = `${env.MASTER}/signup`;
    const params = new HttpParams()
    params.set('userDetails',data);
    return this.http.post(url, params).toPromise().then(result => {
      return result;
    });
  }
}
