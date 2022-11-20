import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { UserImportBuilder } from 'firebase-admin/lib/auth/user-import-builder';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-form-noticias',
	templateUrl: './form-noticias.component.html',
	styleUrls: ['./form-noticias.component.css']
})
export class FormNoticiasComponent implements OnInit {

	user: User = JSON.parse(localStorage.getItem('user')!);
	userData: any;

	constructor(
		public authService: AuthService, private service: SharedService
	) { }

	noticiasList: any = [];
	@Input() noticia: any;
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

	ngOnInit(): void {
		//this.loadNoticiasList();
		this.userData = this.authService.GetUserData(this.user).subscribe((data) => {
			this.userData = data.data();
		})
		
		this.refeshNoticiasList();
		this.Id = this.noticia.Id;
		this.nombre = this.noticia.nombre;
		this.apellido = this.noticia.apellido;
		this.descripcionNoticia = this.noticia.descripcion;
		this.correoNoticia = this.noticia.correo;
		this.direccionNoticia = this.noticia.direccion;
		this.coloniaNoticia = this.noticia.colonia;
		this.codigoPostal = this.noticia.codigoPostal;
		this.tipoUsuarioNoticia = this.noticia.tipoUsuario;
		this.agregarNoticia = this.noticia.agregarNoticia;
	}


	loadNoticiasList() {
		this.service.getNoticiasList().subscribe((data: any) => {
			this.noticiasList = data;
			this.nombre = this.noticia.nombre;
			this.apellido = this.noticia.apellido;
			this.descripcionNoticia = this.noticia.descripcion;
			this.correoNoticia = this.noticia.correo;
			this.direccionNoticia = this.noticia.direccion;
			this.coloniaNoticia = this.noticia.colonia;
			this.codigoPostal = this.noticia.codigoPostal;
			this.tipoUsuarioNoticia = this.noticia.tipoUsuario;
		});
		console.log("agregar noticia: " + this.agregarNoticia);
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
			tipoUsuario: "Pendiente"
		};
		this.service.anadirNoticia(noticia).subscribe((res) => {
			//alert(res.toString());
		});
		console.log("Noticia objeto");
		console.log(noticia);
	}

	editarNoticia() {
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
		console.log("Id a cambiar" + this.Id);
		console.log(noticia);
		this.service.editarNoticia(noticia).subscribe((res) => {
			//alert(res.toString());
		});
	}

	editarNoticiaAdmin() {
		var noticia = {
			Id: this.Id,
			nombre: this.nombre,
			apellido: this.apellido,
			descripcion: this.descripcionNoticia,
			correo: this.correoNoticia,
			direccion: this.direccionNoticia,
			colonia: this.coloniaNoticia,
			codigoPostal: this.codigoPostal,
			tipoUsuario: "Aprobada"
		};
		console.log("Id a cambiar" + this.Id);
		console.log(noticia);
		this.service.editarNoticia(noticia).subscribe((res) => {
			//alert(res.toString());
		});
	}


	refeshNoticiasList() {
		this.service.getNoticiasList().subscribe((data: any) => {
			this.noticiasList = data;
		});
	}


}
