import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(private service: SharedService) { }

  NoticiaList: any = [];
  QuejaList: any = [];
  @Input() queja: any;
  @Input() noticia: any;

  ngOnInit(): void {
	this.refreshNoticiaList();
	this.refreshQuejaList();
  }

  refreshNoticiaList()	{
  	this.service.getNoticiasList().subscribe(data => {
  		this.NoticiaList = data;
		console.log(this.NoticiaList);
  	});
  }
  refreshQuejaList()	{
  	this.service.getQuejasList().subscribe(data => {
  		this.QuejaList = data;
		  console.log(this.QuejaList);
  	});
  }

  editClick(item: any) {
		this.noticia = item;
	}
 
	eliminarQueja(item: any) {
		if(confirm('¿Está seguro de que desea eliminar esta queja?')) {
			this.service.borrarQueja(item).subscribe(data => {
				alert(data.toString());
				this.refreshQuejaList();
			});
		}
	}
}
