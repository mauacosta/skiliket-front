import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { climaData } from '../models/clima.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ClimaService {

	constructor(private http: HttpClient) { }
	getClimaData(nombreCiudad: string): Observable<climaData> {
		return this.http.get<climaData>(environment.climaApiUrl,
			{
				headers: new HttpHeaders()
					.set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIHostHeaderValue)
					.set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
				params: new HttpParams()
					.set('q', nombreCiudad)
					.set('units', 'metric')
					.set('mode', 'json')
			})
	}
}
