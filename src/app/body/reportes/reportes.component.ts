import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
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

	public options: any ={
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie'
			},
			title: {
				text: 'Usuarios nuevos divididos por tipo'
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			accessibility: {
				point: {
					valueSuffix: '%'
				}
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						connectorColor: 'silver'
					}
				}
			},
			series: [{
				name: 'Share',
				data: [
					{ name: 'Super administradores', y: 73.24 },
					{ name: 'Administradores', y: 12.93 },
					{ name: 'Vecinos', y: 4.73 }
				]
			}]
	}

	ngOnInit(): void {
		this.getClimaData(this.nombreCiudad);
		this.nombreCiudad = '';
		Highcharts.chart('container', this.options);
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
