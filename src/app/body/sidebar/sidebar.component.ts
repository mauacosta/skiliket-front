import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	constructor() { }
	quejasList: any = [];
	@Input() queja: any;
	naturaleza: string = "";
	descripcion: string = "";
	correo: string = "";
	direccion: string = "";
	activarModal: boolean = false;

	ngOnInit(): void {
		this.naturaleza = this.queja.naturaleza;
		this.descripcion = this.queja.descripcion;
		this.correo = this.queja.correo;
		this.direccion = this.queja.direccion;
	}


	anadirQuejaModal(){
		this.naturaleza = "";
		this.descripcion = "";
		this.correo = "";
		this.direccion = "";
		this.activarModal = true;
	}
	anadirQueja() {
		var queja = {
			naturaleza: this.naturaleza,
			descripcion: this.descripcion,
			correo: this.correo,
			direccion: this.direccion
		};
		console.log(this.naturaleza);
		console.log(queja);
		this.quejasList.push(queja);
		console.log("anadir queja");
	}

}
