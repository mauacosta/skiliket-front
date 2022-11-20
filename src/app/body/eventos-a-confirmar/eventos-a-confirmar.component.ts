import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-eventos-a-confirmar',
  templateUrl: './eventos-a-confirmar.component.html',
  styleUrls: ['./eventos-a-confirmar.component.css']
})
export class EventosAConfirmarComponent implements OnInit {

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
	activarEdicionNoticia: boolean = false;

	queja: any;
	agregarQueja: number = 0;
	quejaId: number | undefined;
	naturaleza: string | undefined;
	descripcion: string  | undefined;
	correo: string  | undefined;
	direccion: string | undefined;
	fecha: string | undefined;
	tipoUsuario: string | undefined;
	activarEdicionQueja: boolean = false;

	ngOnInit(): void {
		this.refreshNoticiaList();
		this.refreshQuejaList();
		//Ver si descomentar esto
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


	editClickQueja(item: any) {
		this.queja = item;
		this.activarEdicionQueja = true;
	}

	deleteClickQueja(item: any) {
		//Print JSON  item
		console.log(item);
		console.log("Id a borrar: " + item.Id);
		this.service.borrarQueja(item.Id).subscribe(data => {
			//alert(data.toString());
			this.refreshQuejaList();
		});
	}
	eliminarQueja(item:any) {
		var queja = {
			Id: item.Id,
			naturaleza: item.naturaleza,
			descripcion: item.descripcion,
			correo: item.correo,
			direccion: item.direccion,
			fecha: item.fecha,
			tipoUsuario: "Inactivo"
		};
		console.log("Id a cambiar" + item.Id);
		console.log(queja);
		this.service.editarQueja(queja).subscribe((res) => {
			//alert(res.toString());
		});
		this.refreshQuejaList();	
	}

	editClickNoticia(item: any) {
		this.noticia = item;
		console.log("Item")
		console.log(item);
		console.log(this.noticia.agregarNoticia);
		this.activarEdicionNoticia = true;
	}

	deleteClickNoticia(item: any) {
			//Print JSON  item
		console.log(item);
		console.log("Id a borrar: " + item.Id);
		this.service.borrarNoticia(item.Id).subscribe(data => {
			//alert(data.toString());
			this.refreshQuejaList();
		});
	}
	eliminarNoticia(item: any) {
		var noticia = {
			Id: item.Id,
			nombre: item.nombre,
			apellido: item.apellido,
			descripcion: item.descripcionNoticia,
			correo: item.correoNoticia,
			direccion: item.direccionNoticia,
			colonia: item.coloniaNoticia,
			codigoPostal: item.codigoPostal,
			tipoUsuario: "Inactivo"
		};
		console.log("Id a cambiar" + item.Id);
		console.log(noticia);
		this.service.editarNoticia(noticia).subscribe((res) => {
			//alert(res.toString());
		});
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
