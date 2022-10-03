import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import {Mes} from './mes';



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
	constructor(public _Activatedroute: ActivatedRoute) { }
	QuejasList: any = [];
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
				'Tráfico',
				'Contaminación',
				'Suciedad',
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
		this.poblarQuejas();
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
		Highcharts.chart('container', this.options);
	}
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

}
