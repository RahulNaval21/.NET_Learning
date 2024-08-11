import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  baseUrl = "http://localhost:5140/api/";

  login(model:any){
    return this.http.post(this.baseUrl + 'account/login',model);
  }
}
