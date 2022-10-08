import { Component, OnInit } from '@angular/core';
import { climaData } from 'src/app/modelos/clima.model';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
	selector: 'app-reportes',
	templateUrl: './reportes.component.html',
	styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

	constructor(private climaService: ClimaService) { }

	nombreCiudad: string = 'Mexico City';
	climaData?: climaData;

	ngOnInit(): void {
		this.getClimaData(this.nombreCiudad);
		this.nombreCiudad = '';
	}

	onSubmit() { 
		this.getClimaData(this.nombreCiudad);
		this.nombreCiudad = '';
	}

	private getClimaData(nombreCiudad: string) {
		this.climaService.getClimaData(nombreCiudad)
			.subscribe({
				next: (response) => {
					this.climaData = response;
					console.log(response);
				}
			});
	}
}
