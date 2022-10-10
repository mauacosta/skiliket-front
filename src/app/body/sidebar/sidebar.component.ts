import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { UserImportBuilder } from 'firebase-admin/lib/auth/user-import-builder';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	constructor(
		public authService: AuthService
	) { }
	
	quejasList: any = [];
	@Input() queja: any;
	naturaleza: string = "";
	descripcion: string = "";
	correo: string = "";
	direccion: string = "";
	activarModal: boolean = false;
	user: User = JSON.parse(localStorage.getItem('user')!);
	userData: any;




	ngOnInit(): void {
		var queja = {
			naturaleza: this.naturaleza,
			descripcion: this.descripcion,
			correo: this.correo,
			direccion: this.direccion
		};

		this.userData = this.authService.GetUserData(this.user).subscribe((data) => {
			this.userData = data.data();
		})
		
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
