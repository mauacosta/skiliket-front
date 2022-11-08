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
	Id: number = 0;
	agregarNoticia: number = 0;
	nombre: string = "";
	apellido: string = "";
	descripcionNoticia: string = "";
	correoNoticia: string = "";
	direccionNoticia: string = "";
	coloniaNoticia: string = "";
	codigoPostal: string = "";
	tipoUsuarioNoticia: string = "";

	quejasList: any = [];
	queja: any;
	//agregarQueja: number = 0;
	quejaId: number = 0;
	agregarQueja: number = 0;
	naturaleza: string = "";
	descripcion: string = "";
	correo: string = "";
	direccion: string = "";
	fecha: string = "";
	tipoUsuario: string = "";
	//activarModalQueja: boolean = false;

	ngOnInit(): void {
		this.refreshQuejaList();
		this.refreshNoticiaList();
		//this.noticiaId = this.noticia.noticiaId;
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
		this.agregarQueja = this.queja.agregarQueja;
		
	}

	
	anadirQueja() {
		var queja = {
			Id: this.Id,
			naturaleza: this.naturaleza,
			descripcion: this.descripcion,
			correo: this.correo,
			direccion: this.direccion,
			fecha: this.fecha,
			tipoUsuario: this.tipoUsuario
		};
		this.service.anadirQueja(queja).subscribe((res) => {
			//alert(res.toString());
		});
		console.log("Queja objeto");
		console.log(queja);
		this.refreshQuejaList();
	}

	anadirQuejaModal() {
		//this.activarModalQueja = true;
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
		//this.activarModalNoticia = true;
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
	anadirNoticia() {
		var noticia = {
			Id: this.Id,
			nombre: this.nombre,
			apellido: this.apellido,
			descripcion: this.descripcionNoticia,
			correo: this.correoNoticia,
			direccion: this.direccionNoticia,
			colonia: this.coloniaNoticia,
			codigoPostal: this.codigoPostal,
			tipoUsuario: this.tipoUsuarioNoticia
		};
		this.service.anadirNoticia(noticia).subscribe((res) => {
			//alert(res.toString());
		});
		console.log("Noticia objeto");
		console.log(noticia);
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
