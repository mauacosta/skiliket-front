import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	readonly APIUrl = "http://localhost:5000/api";

	constructor(private http: HttpClient) { }

	getQuejasList(): Observable<any[]> {
		return this.http.get<any>(this.APIUrl + '/Queja')
	}

	anadirQueja(val: any) {
		return this.http.post<any>(this.APIUrl + '/Queja', val)
	}
	editarQueja(val: any) {
		return this.http.put<any>(this.APIUrl + '/Queja', val)
	}
	borrarQueja(val: any) {
		return this.http.delete<any>(this.APIUrl + '/Queja', val)
	}
	getNoticiasList(): Observable<any[]> {
		return this.http.get<any>(this.APIUrl + '/Noticia')
	}

	anadirNoticia(val: any) {
		return this.http.post<any>(this.APIUrl + '/Noticia', val)
	}
	editarNoticia(val: any) {
		return this.http.put<any>(this.APIUrl + '/Noticia', val)
	}
	borrarNoticia(val: any) {
		return this.http.delete<any>(this.APIUrl + '/Noticia', val)
	}
	


}