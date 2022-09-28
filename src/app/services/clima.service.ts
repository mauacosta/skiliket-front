import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) { }
  getClimaData(nombreCiudad: string) {
	return this.http.get('https://open-weather13.p.rapidapi.com/city/landon');
  }
}
