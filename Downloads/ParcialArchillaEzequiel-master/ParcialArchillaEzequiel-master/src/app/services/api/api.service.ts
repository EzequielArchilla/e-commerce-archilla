import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public ObtenerGitHub() {
    return this.http.get('https://api.github.com/users/EzequielArchilla');
  }

  public ObtenerPaises() {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  public ObtenerPais(country: string) {
    return this.http.get(
      'https://restcountries.com/v3.1/name/' + country + '?fullText=true'
    );
  }
}
