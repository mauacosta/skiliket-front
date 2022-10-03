import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-form-quejas',
	templateUrl: './form-quejas.component.html',
	styleUrls: ['./form-quejas.component.css']
})
export class FormQuejasComponent implements OnInit {

	constructor() { }
	quejasList: any = [];
	@Input() queja: any;
	naturaleza: string = "";
	descripcion: string = "";
	correo: string = "";
	direccion: string = "";

	ngOnInit(): void {
		this.naturaleza = this.queja.naturaleza;
		this.descripcion = this.queja.descripcion;
		this.correo = this.queja.correo;
		this.direccion = this.queja.direccion;
	}
	anadirQueja() {
		var queja = {
			naturaleza: this.naturaleza,
			descripcion: this.descripcion,
			correo: this.correo,
			direccion: this.direccion
		};
		console.log(queja);
		this.quejasList.push(queja);
		console.log("Queja añadida");
		console.log(this.quejasList);
	}

}
