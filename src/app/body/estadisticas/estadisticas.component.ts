import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import {Mes} from './mes';
import { SharedService } from 'src/app/shared.service';



declare var require: any;
let pareto = require('highcharts/modules/pareto');
let exporting = require('highcharts/modules/exporting');
let exportdata = require('highcharts/modules/export-data');
let accessibility = require('highcharts/modules/accessibility');



pareto(Highcharts);
exportdata(Highcharts);
exporting(Highcharts);
accessibility(Highcharts);


@Component({
	selector: 'app-estadisticas',
	templateUrl: './estadisticas.component.html',
	styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
	mes: Mes[] | undefined;

	constructor(public _Activatedroute: ActivatedRoute,  private service: SharedService) { }
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
			renderTo: 'container',
			type: 'column'
		},
		title: {
			text: 'Quejas ciudadanas de: ' + this._Activatedroute.snapshot.paramMap.get('Mes')
		},
		tooltip: {
			shared: true
		},
		xAxis: {
			categories: [
				'Servicios públicos (Gas, electricidad, agua)',
				'Robos',
				'Inundaciones',
				'Incendios',
				'Contaminación',
				'Mucho ruido',
				'Otros'
			],
			crosshair: true
		},
		yAxis: [{
			title: {
				text: ''
			}
		}, {
			title: {
				text: ''
			},
			minPadding: 0,
			maxPadding: 0,
			max: 100,
			min: 0,
			opposite: true,
			labels: {
				format: "{value}%"
			}
		}],
		series: [{
			color: 'rgb(201, 223, 238)',
			type: 'pareto',
			name: 'Pareto',
			yAxis: 1,
			zIndex: 10,
			baseSeries: 1,
			tooltip: {
				valueDecimals: 2,
				valueSuffix: '%'
			}
		}, {
			color: 'rgb(0, 100, 175)',
			name: 'Quejas',
			type: 'column',
			zIndex: 2,
			data: []
		}]
	}


	ngOnInit(): void {
		//this.poblarQuejas();
		this.llenarPareto();
		this.mes = [
			{ Mes: "Enero" },
			{ Mes: "Febrero" },
			{ Mes: "Marzo" },
			{ Mes: "Abril" },
			{ Mes: "Mayo" },
			{ Mes: "Junio" },
			{ Mes: "Julio" },
			{ Mes: "Agosto" },
			{ Mes: "Septiembre" },
			{ Mes: "Octubre" },
			{ Mes: "Noviembre" },
			{ Mes: "Diciembre" }
		];
	}

	llenarPareto() {
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
				this.options.series[1]['data'].push(this.contadorServiciosPublicos);
				this.options.series[1]['data'].push(this.contadorRobos);
				this.options.series[1]['data'].push(this.contadorInundaciones);
				this.options.series[1]['data'].push(this.contadorIncendios);
				this.options.series[1]['data'].push(this.contadorContaminacion);
				this.options.series[1]['data'].push(this.contadorMuchoRuido);
				this.options.series[1]['data'].push(this.contadorOtros);
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
		

/*
	poblarQuejas(){
		this.QuejasList = [
			{ Queja: "Servicios públicos (Gas, electricidad, agua)", Cantidad: 755 },
			{ Queja: "Robos", Cantidad: 222 },
			{ Queja: "Inundaciones", Cantidad: 151 },
			{ Queja: "Incendios", Cantidad: 123 },
			{ Queja: "Tráfico", Cantidad: 86 },
			{ Queja: "Contaminación", Cantidad: 72 },
			{ Queja: "Suciedad", Cantidad: 51 },
			{ Queja: "Mucho ruido", Cantidad: 36 },
			{ Queja: "Otros", Cantidad: 10 }
		];
		//console log QuejasList
		console.log(this.QuejasList);
		//Poblar el gráfico con los datos de la lista
		for (let i = 0; i < this.QuejasList.length; i++) {
			this.options.series[1].data.push(this.QuejasList[i].Cantidad);
		}
	}
	*/

}
