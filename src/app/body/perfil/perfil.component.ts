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
		this.refreshNoticiaList();
		this.refreshQuejaList();
		this.userData = this.authService.GetUserData(this.user).subscribe((data) => {
			this.userData = data.data();
		})



	}

	editComponentsProfile(): void {
		this.editComponents = !this.editComponents
	}
	editProfile(): void {
		console.log("editando")
	}
	refreshNoticiaList() {
		this.service.getNoticiasList().subscribe(data => {
			this.NoticiaList = data;
			console.log(this.NoticiaList);
			for (let i = 0; i < this.NoticiaList.length; i++) {
				this.contadorNoticias++;
				console.log("Numero de eventos: " +this.contadorNoticias);
		}
		});
	}
	refreshQuejaList() {
		this.service.getQuejasList().subscribe(data => {
			this.QuejaList = data;
			console.log(this.QuejaList);
			for (let j = 0; j < this.QuejaList.length; j++) {
				this.contadorQuejas++;
				console.log("Numero de eventos: " +this.contadorQuejas);
		}
		this.contadorTotal = this.contadorNoticias + this.contadorQuejas;
		});
	}

}
