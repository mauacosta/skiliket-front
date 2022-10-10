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
	naturaleza: string = "";
	descripcion: string = "";
	correo: string = "";
	direccion: string = "";
	fecha: string = "";

	ngOnInit(): void {
		this.naturaleza = this.queja.naturaleza;
		this.descripcion = this.queja.descripcion;
		this.correo = this.queja.correo;
		this.direccion = this.queja.direccion;
		this.fecha = this.queja.fecha;
	}
	anadirQueja() {
		var queja = {
			naturaleza: this.naturaleza,
			descripcion: this.descripcion,
			correo: this.correo,
			direccion: this.direccion,
			fecha: this.fecha
		};
		this.service.anadirQueja(queja).subscribe((res) => {
			alert(res.toString());
		});
		console.log("Queja objeto");
		console.log(queja);
		this.quejasList.push(queja);
		console.log("Queja añadida");
		console.log(this.quejasList);
	}
	editarQueja() {
		var queja = {
			naturaleza: this.naturaleza,
			descripcion: this.descripcion,
			correo: this.correo,
			direccion: this.direccion,
			fecha: this.fecha
		};
		this.service.editarQueja(queja).subscribe((res) => {
			alert(res.toString());
		});
		console.log("Queja objeto");
		console.log(queja);
	}

}
