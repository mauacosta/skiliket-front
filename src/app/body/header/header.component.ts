import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	mostrar: boolean = true;
	contador: number = 0;
	constructor(
		public authService: AuthService
	) { }

	ngOnInit(): void {
		if(this.contador > 0){
			this.mostrar = false;
		}
	}



	iniciarSesion() {
		this.mostrar = false;
	}

}
