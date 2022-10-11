import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
	selector: 'app-form-noticias',
	templateUrl: './form-noticias.component.html',
	styleUrls: ['./form-noticias.component.css']
})
export class FormNoticiasComponent implements OnInit {

	constructor(private service: SharedService) { }

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
			tipoUsuario: this.tipoUsuarioNoticia
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
			alert(res.toString());
		});
	}

	refeshNoticiasList() {
		this.service.getNoticiasList().subscribe((data: any) => {
			this.noticiasList = data;
		});
	}


}
