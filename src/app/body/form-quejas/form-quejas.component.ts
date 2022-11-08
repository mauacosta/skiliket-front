import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
	selector: 'app-form-quejas',
	templateUrl: './form-quejas.component.html',
	styleUrls: ['./form-quejas.component.css']
})
export class FormQuejasComponent implements OnInit {

	constructor(private service: SharedService) { }

	quejasList: any = [];
	@Input() queja: any;
	Id: number = 0;
	agregarQueja: number = 0;
	naturaleza: string = "";
	descripcion: string = "";
	correo: string = "";
	direccion: string = "";
	fecha: string = "";
	tipoUsuario: string = "";

	ngOnInit(): void {
		//this.loadQuejasList();
		this.refreshQuejaList();
		this.Id = this.queja.Id;
		this.naturaleza = this.queja.naturaleza;
		this.descripcion = this.queja.descripcion;
		this.correo = this.queja.correo;
		this.direccion = this.queja.direccion;
		this.fecha = this.queja.fecha;
		this.tipoUsuario = this.queja.tipoUsuario;
		this.agregarQueja = this.queja.agregarQueja;
	}

	loadQuejasList() {
		this.service.getQuejasList().subscribe((data: any) => {
			this.quejasList = data;
			this.naturaleza = this.queja.naturaleza;
			this.descripcion = this.queja.descripcion;
			this.correo = this.queja.correo;
			this.direccion = this.queja.direccion;
			this.fecha = this.queja.fecha;
			this.tipoUsuario = this.queja.tipoUsuario;
		});
		console.log("agregar queja: " + this.agregarQueja);
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
	editarQueja() {
		var queja = {
			Id: this.Id,
			naturaleza: this.naturaleza,
			descripcion: this.descripcion,
			correo: this.correo,
			direccion: this.direccion,
			fecha: this.fecha,
			tipoUsuario: this.tipoUsuario
		};
		console.log("Id a cambiar" + this.Id);
		console.log(queja);
		this.service.editarQueja(queja).subscribe((res) => {
			alert(res.toString());
		});
		this.refreshQuejaList();	
	}
	refreshQuejaList() {
		this.service.getQuejasList().subscribe(data => {
			this.quejasList = data;
		});
	}

}