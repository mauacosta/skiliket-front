import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
	selector: 'app-noticias',
	templateUrl: './noticias.component.html',
	styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

	constructor(private service: SharedService) { }

	NoticiaList: any = [];
	QuejaList: any = [];
	noticia: any;
	agregarNoticia: number = 0;
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

	queja: any;
	agregarQueja: number = 0;
	quejaId: number | undefined;
	naturaleza: string | undefined;
	descripcion: string  | undefined;
	correo: string  | undefined;
	direccion: string | undefined;
	fecha: string | undefined;
	tipoUsuario: string | undefined;
	activarModalQueja: boolean = false;

	ngOnInit(): void {
		this.refreshNoticiaList();
		this.refreshQuejaList();
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


	editClickQueja(item: any) {
		this.queja = item;
		this.activarModalQueja = true;
	}

	deleteClickQueja(item: any) {
		if (confirm('¿Está seguro de eliminar esta queja?')) {
			this.service.borrarQueja(item.quejaId).subscribe(data => {
				alert(data.toString());
				this.refreshQuejaList();
			})
		}
	}

	editClickNoticia(item: any) {
		this.noticia = item;
		this.activarModalNoticia = true;
	}

	deleteClickNoticia(item: any) {
		if (confirm('¿Está seguro de eliminar esta noticia?')) {
			this.service.borrarNoticia(item.noticiaId).subscribe(data => {
				alert(data.toString());
				this.refreshNoticiaList();
			})
		}
	}

	refreshNoticiaList() {
		this.service.getNoticiasList().subscribe(data => {
			this.NoticiaList = data;
			console.log(this.NoticiaList);
		});
	}
	refreshQuejaList() {
		this.service.getQuejasList().subscribe(data => {
			this.QuejaList = data;
			console.log(this.QuejaList);
		});
	}

}
