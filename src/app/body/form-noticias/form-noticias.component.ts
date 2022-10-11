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
	
	nombre: string = "";
	apellido: string = "";
	descripcionNoticia: string = "";
	correoNoticia: string = "";
	direccionNoticia: string = "";
	coloniaNoticia: string = "";
	codigoPostal: string = "";
	tipoUsuarioNoticia: string = "";
	ngOnInit(): void {
		this.nombre = this.noticia.nombre;
		this.apellido = this.noticia.apellido;
		this.descripcionNoticia = this.noticia.descripcion;
		this.correoNoticia = this.noticia.correo;
		this.direccionNoticia = this.noticia.direccion;
		this.coloniaNoticia = this.noticia.colonia;
		this.codigoPostal = this.noticia.codigoPostal;
		this.tipoUsuarioNoticia = this.noticia.tipoUsuario;
	}

	anadirNoticia() {
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
		this.service.anadirNoticia(noticia).subscribe((res) => {
			alert(res.toString());
		});
		console.log("Noticia objeto");
		console.log(noticia);
	}

	editarNoticia() {
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
		this.service.editarNoticia(noticia).subscribe((res) => {
			alert(res.toString());
		});
	}


}
