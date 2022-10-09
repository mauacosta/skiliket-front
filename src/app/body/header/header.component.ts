import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	mostrar: boolean = true;
	contador: number = 0;
	constructor() { }

	ngOnInit(): void {
		if(this.contador > 0){
			this.mostrar = false;
		}
	}



	iniciarSesion() {
		this.mostrar = false;
	}

}
