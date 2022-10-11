import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { climaData } from 'src/app/modelos/clima.model';
import { ClimaService } from 'src/app/services/clima.service';
import { SharedService } from 'src/app/shared.service';




@Component({
	selector: 'app-reportes',
	templateUrl: './reportes.component.html',
	styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

	constructor(private climaService: ClimaService, private service: SharedService) { }

	nombreCiudad: string = 'Mexico City';
	climaData?: climaData;
	QuejaList: any = [];
	contadorServiciosPublicos: number = 0;
	contadorRobos: number = 0;
	contadorInundaciones: number = 0;
	contadorIncendios: number = 0;
	contadorContaminacion: number = 0;
	contadorMuchoRuido: number = 0;
	contadorOtros: number = 0;

	public options: any = {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: 'Quejas por tipo'
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
			name: 'Porcentaje',
			data: [
			/*{ name: 'Servicios públicos (Gas, electricidad, agua)', y: 0 },
			{ name: 'Robos', y: 0 },
			{ name: 'Inundaciones', y: 0 },
			{ name: 'Incendios', y: 0 },
			{ name: 'Contaminación', y: 0 },
			{ name: 'Mucho ruido', y: 0 },
			{ name: 'Otros', y: 0 }*/
			]
		}]
	};

	ngOnInit(): void {
		this.poblarPastel();
		this.options.series[0]['data'] = [{ name: 'Servicios públicos (Gas, electricidad, agua)', y: 0 }, { name: 'Robo', y: 0 }, { name: 'Inundaciones', y: 0 }, {name: 'Incendios', y: 0}, { name: 'Contaminación', y: 0 }, { name: 'Mucho ruido', y: 0 }, { name: 'Otros', y: 0 }];
		this.getClimaData(this.nombreCiudad);
		this.nombreCiudad = '';
	}
	poblarPastel() {
		this.service.getQuejasList().subscribe(data => {
			this.QuejaList = data;
			console.log(this.QuejaList);
			//for in QuejasList
			for (let i = 0; i < this.QuejaList.length; i++) {
				//if naturaleza == 'Servicios públicos (Gas, electricidad, agua)'
				if (this.QuejaList[i].naturaleza === 'Servicios públicos (Gas, electricidad, agua)') {
					this.contadorServiciosPublicos++;
				} else
					//if naturaleza == 'Robos'
					if (this.QuejaList[i].naturaleza === 'Robos') {
						this.contadorRobos++;
					} else
						//if naturaleza == 'Inundaciones'
						if (this.QuejaList[i].naturaleza === 'Inundaciones') {
							this.contadorInundaciones++;
						} else
							//if naturaleza == 'Incendios'
							if (this.QuejaList[i].naturaleza === 'Incendios') {
								this.contadorIncendios++;
							} else
							//if naturaleza == 'Contaminación'
							if (this.QuejaList[i].naturaleza === 'Contaminación') {
								this.contadorContaminacion++;
							} else
								//if naturaleza == 'Mucho ruido'
								if (this.QuejaList[i].naturaleza === 'Mucho ruido') {
									this.contadorMuchoRuido++;
								} else
									//if naturaleza == 'Otros'
									if (this.QuejaList[i].naturaleza === 'Otros') {
										this.contadorOtros++;
									}
			}
			if (this.contadorServiciosPublicos > 0 || this.contadorContaminacion > 0 ||
				this.contadorInundaciones > 0 || this.contadorMuchoRuido > 0 ||
				this.contadorOtros > 0 || this.contadorRobos > 0 || this.contadorIncendios > 0) {
					/*Populate this.options.series[0]['data'][1] with the value of this.contadorRobos
					this.options.series[0]['data'][0]['y'] = this.contadorServiciosPublicos;
					this.options.series[0]['data'][1]['y'] = this.contadorRobos;
					this.options.series[0]['data'][2]['y'] = this.contadorInundaciones;
					this.options.series[0]['data'][3]['y'] = this.contadorIncendios;
					this.options.series[0]['data'][4]['y'] = this.contadorContaminacion;
					this.options.series[0]['data'][5]['y'] = this.contadorMuchoRuido;
					this.options.series[0]['data'][6]['y'] = this.contadorOtros;*/
					//this.options.series[0]['data'][1] = this.contadorRobos;
				this.options.series[0]['data'][0] = {
					name: 'Servicios públicos (Gas, electricidad, agua)',
					y: this.contadorServiciosPublicos
				};
				
				this.options.series[0]['data'][1] = {
					name: 'Robos',
					y: this.contadorRobos
				};
				this.options.series[0]['data'][2] = {
					name: 'Inundaciones',
					y: this.contadorInundaciones
				};
				this.options.series[0]['data'][3] = {
					name: 'Incendios',
					y: this.contadorIncendios
				};
				this.options.series[0]['data'][4] = {
					name: 'Contaminación',
					y: this.contadorContaminacion
				};
				this.options.series[0]['data'][5] = {
					name: 'Mucho ruido',
					y: this.contadorMuchoRuido
				};
				this.options.series[0]['data'][6] = {
					name: 'Otros',
					y: this.contadorOtros
				};
				console.log("Contaminacion: " + this.contadorContaminacion);
				console.log("Inundaciones: " + this.contadorInundaciones);
				console.log("Incendios: " + this.contadorIncendios);
				console.log("Mucho ruido: " + this.contadorMuchoRuido);
				console.log("Otros: " + this.contadorOtros);
				console.log("Robos: " + this.contadorRobos);
				console.log("Servicios publicos: " + this.contadorServiciosPublicos);

			}
				else {
					this.options.series[0]['data'][0] = {
						name: 'No existen quejas sobre ningun tema',
						y: 10
					};
				}
				Highcharts.chart('container', this.options);
		});
		
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
