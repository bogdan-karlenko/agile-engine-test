import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITransaction } from './../interfaces';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  getTransactionList(): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>(`${environment.apiUrl}/transactions`);
  }
}
