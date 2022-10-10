import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	constructor(private service: SharedService, private httpClient: HttpClient) { }
	quejasList: any = [];
	noticiasList: any = [];
	@Input() queja: any;
	naturaleza: string = "";
	descripcion: string = "";
	correo: string = "";
	direccion: string = "";
	tipoUsuario: string = "";
	activarModal: boolean = false;

	@Input() noticia: any;
	nombre: string = "";
	apellido: string = "";
	descripcionNoticia: string = "";
	correoNoticia: string = "";
	direccionNoticia: string = "";
	coloniaNoticia: string = "";
	codigoPostal: string = "";
	tipoUsuarioNoticia: string = "";

	ngOnInit(): void {
		this.naturaleza = this.queja.naturaleza;
		this.descripcion = this.queja.descripcion;
		this.correo = this.queja.correo;
		this.direccion = this.queja.direccion;
		this.tipoUsuario = this.queja.tipoUsuario;
		this.nombre = this.noticia.nombre;
		this.apellido = this.noticia.apellido;
		this.descripcionNoticia = this.noticia.descripcion;
		this.correoNoticia = this.noticia.correo;
		this.direccionNoticia = this.noticia.direccion;
		this.coloniaNoticia = this.noticia.colonia;
		this.codigoPostal = this.noticia.codigoPostal;
		this.tipoUsuarioNoticia = this.noticia.tipoUsuario;
	}


	anadirQuejaModal(){
		this.naturaleza = "";
		this.descripcion = "";
		this.correo = "";
		this.direccion = "";
		this.activarModal = true;
	}
	anadirQueja() {
		var queja = {
			naturaleza: this.naturaleza,
			descripcion: this.descripcion,
			correo: this.correo,
			direccion: this.direccion
		};
		console.log(this.naturaleza);
		console.log(queja);
		this.quejasList.push(queja);
		console.log("anadir queja");
	}
	anadirNoticiaModal(){
		this.nombre = "";
		this.apellido = "";
		this.descripcionNoticia = "";
		this.correoNoticia = "";
		this.direccionNoticia = "";
		this.coloniaNoticia = "";
		this.codigoPostal = "";
		this.tipoUsuarioNoticia = "";
		this.activarModal = true;
	}
	añadirNoticia() {
		var noticia = {
			nombre: this.nombre,
			apellido: this.apellido,
			descripcion: this.descripcionNoticia,
			correo: this.correoNoticia,
			direccion: this.direccionNoticia,
			colonia: this.coloniaNoticia,
			codigoPostal: this.codigoPostal,
			tipoUsuario: this.tipoUsuarioNoticia
		};
		console.log(this.nombre);
		console.log(noticia);
		this.noticiasList.push(noticia);
		console.log("anadir noticia");
	}
	

}
