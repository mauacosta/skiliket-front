import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private service: SharedService) { }
  NoticiaList: any = [];
  QuejaList: any = [];
  contadorNoticias: number = 0;
  contadorQuejas: number = 0;
  contadorTotal: number = 0;

  
	ngOnInit(): void {
		this.refreshNoticiaList();
		this.refreshQuejaList();
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
