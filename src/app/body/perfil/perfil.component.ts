import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { SharedService } from 'src/app/shared.service';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
	editComponents = false

	user: User = JSON.parse(localStorage.getItem('user')!);
	userData: any;

	constructor(
		public authService: AuthService, private service: SharedService
	) { }
	NoticiaList: any = [];
	QuejaList: any = [];
	contadorNoticias: number = 0;
	contadorQuejas: number = 0;
	contadorTotal: number = 0;

	ngOnInit(): void {

		this.userData = this.authService.GetUserData(this.user).subscribe((data) => {
			this.userData = data.data();
			this.refreshNoticiaList();
			this.refreshQuejaList();
		})
	}

	refreshNoticiaList() {
		this.service.getNoticiasList().subscribe(data => {
			this.NoticiaList = data;
			console.log(this.NoticiaList);
			for (let i = 0; i < this.NoticiaList.length; i++) {
				if(this.NoticiaList[i].tipoUsuario === ""){
				this.contadorNoticias++;
				console.log("Numero de eventos: " +this.contadorNoticias);
		}
	}
		});
	}
	refreshQuejaList() {
		this.service.getQuejasList().subscribe(data => {
			this.QuejaList = data;
			console.log(this.QuejaList);
			for (let j = 0; j < this.QuejaList.length; j++) {
				if(this.QuejaList[j].tipoUsuario === ""){
				this.contadorQuejas++;
				console.log("Numero de eventos: " +this.contadorQuejas);
				}
		}
		this.contadorTotal = this.contadorNoticias + this.contadorQuejas;
		});
	}


editComponentsProfile(): void {
	this.editComponents = !this.editComponents
}
editProfile(): void {
	console.log("editando")
}

}

