import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
	selector: 'app-listado-noticias',
	templateUrl: './listado-noticias.component.html',
	styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent implements OnInit {

	constructor(private service: SharedService) { }
	NoticiaList: any = [];
	QuejaList: any = [];

	ngOnInit(): void {
		this.refreshNoticiaList();
		this.refreshQuejaList();
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

}