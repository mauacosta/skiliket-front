import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { UserImportBuilder } from 'firebase-admin/lib/auth/user-import-builder';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	constructor(private service: SharedService, private httpClient: HttpClient) { }


	noticiasList: any = [];
	noticia: any;
	//agregarNoticia: number = 0;
	noticiaId: number | undefined;
	nombre: string | undefined;
	apellido: string | undefined;
	descripcionNoticia: string | undefined;
	correoNoticia: string | undefined;
	direccionNoticia: string | undefined;
	coloniaNoticia: string | undefined;
	codigoPostal: string | undefined;
	tipoUsuarioNoticia: string | undefined;
	activarModalNoticia: boolean = false;

	quejasList: any = [];
	queja: any;
	//agregarQueja: number = 0;
	quejaId: number | undefined;
	naturaleza: string | undefined;
	descripcion: string  | undefined;
	correo: string  | undefined;
	direccion: string | undefined;
	fecha: string | undefined;
	tipoUsuario: string | undefined;
	activarModalQueja: boolean = false;

	ngOnInit(): void {
		this.refreshQuejaList();
		this.refreshNoticiaList();
		this.noticiaId = this.noticia.noticiaId;
		this.nombre = this.noticia.nombre;
		this.apellido = this.noticia.apellido;
		this.descripcionNoticia = this.noticia.descripcionNoticia;
		this.correoNoticia = this.noticia.correoNoticia;
		this.direccionNoticia = this.noticia.direccionNoticia;
		this.coloniaNoticia = this.noticia.coloniaNoticia;
		this.codigoPostal = this.noticia.codigoPostal;
		this.tipoUsuarioNoticia = this.noticia.tipoUsuarioNoticia;
		this.quejaId = this.queja.quejaId;
		this.naturaleza = this.queja.naturaleza;
		this.descripcion = this.queja.descripcion;
		this.correo = this.queja.correo;
		this.direccion = this.queja.direccion;
		this.fecha = this.queja.fecha;
		this.tipoUsuario = this.queja.tipoUsuario;

	}


	anadirQuejaModal() {
		this.activarModalQueja = true;
		this.queja = {
			agregarQueja: 0,
			quejaId: 0,
			naturaleza: "",
			descripcion: "",
			correo: "",
			direccion: "",
			fecha: "",
			tipoUsuario: ""
		}
		console.log("Agregar queja: " + this.queja.agregarQueja);
	}

	anadirNoticiaModal() {
		this.activarModalNoticia = true;
		this.noticia = {
			agregarNoticia: 0,
			noticiaId: 0,
			nombre: "",
			apellido: "",
			descripcion: "",
			correo: "",
			direccion: "",
			colonia: "",
			codigoPostal: "",
			tipoUsuario: ""
		}
		console.log("Agregar noticia: " + this.noticia.agregarNoticia);
	}

	refreshQuejaList() {
		this.service.getQuejasList().subscribe(data => {
			this.quejasList = data;
		});
	}
	refreshNoticiaList() {
		this.service.getNoticiasList().subscribe(data => {
			this.noticiasList = data;
		});
	}


}
