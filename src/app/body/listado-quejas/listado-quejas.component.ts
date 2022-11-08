import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
	selector: 'app-listado-quejas',
	templateUrl: './listado-quejas.component.html',
	styleUrls: ['./listado-quejas.component.css']
})
export class ListadoQuejasComponent implements OnInit {

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
