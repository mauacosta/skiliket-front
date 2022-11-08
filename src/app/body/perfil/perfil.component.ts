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

	ngOnInit(): void {
		//this.refreshNoticiaList();
		//this.refreshQuejaList();
		this.userData = this.authService.GetUserData(this.user).subscribe((data) => {
			this.userData = data.data();
		})



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
	editComponentsProfile(): void {
		this.editComponents = !this.editComponents
	}
	editProfile(): void {
		console.log("editando")
	}

}
