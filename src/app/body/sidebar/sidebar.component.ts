import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { UserImportBuilder } from 'firebase-admin/lib/auth/user-import-builder';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';


@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	constructor(
		public authService: AuthService,private service: SharedService, private httpClient: HttpClient
	) { }
	

	user: User = JSON.parse(localStorage.getItem('user')!);
	userData:any;
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
	ActivarAltaNoticia: boolean = false;

	quejasList: any = [];
	queja: any;
	quejaId: number = 0;
	agregarQueja: number = 0;
	naturaleza: string = "";
	descripcion: string = "";
	correo: string = "";
	direccion: string = "";
	fecha: string = "";
	tipoUsuario: string = "";
	ActivarAltaQueja: boolean = false;

	ngOnInit(): void {

		this.userData = this.authService.GetUserData(this.user).subscribe((data) => {
			
			this.userData = data.data();
			console.log(this.userData);
		})
		
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
		/*var queja = {
			naturaleza: this.naturaleza,
			descripcion: this.descripcion,
			correo: this.correo,
			direccion: this.direccion
		};*/
		
	}

	anadirQuejaModal() {
		this.ActivarAltaQueja = true;
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
		console.log("Agregar queja del click: " + this.queja.agregarQueja);
	}

	anadirNoticiaModal() {
		this.ActivarAltaNoticia = true;
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
