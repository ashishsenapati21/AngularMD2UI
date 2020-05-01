import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
}
