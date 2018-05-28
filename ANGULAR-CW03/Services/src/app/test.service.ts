import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url: String = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Object> {
    return this.httpClient.get(`${this.url}characters`);
  }

  getSpecies(): Observable<Object> {
    return this.httpClient.get(`${this.url}species`);
  }

  postData(body: Object): Observable<Object>{
    return this.httpClient.post(`${this.url}characters`, body)
  }

  deleteCharacter(id: String){
    return this.httpClient.delete(`${this.url}characters/${id}`);
  }
}
