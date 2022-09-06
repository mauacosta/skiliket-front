import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';



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

  constructor() { }
	public options: any = {
			chart: {
			  renderTo: 'container',
			  type: 'column'
			},
			title: {
			  text: 'Quejas ciudadanas'
			},
			tooltip: {
			  shared: true
			},
			xAxis: {
			  categories: [
				'Robos',
				'Inundaciones',
				'Tráfico',
				'Contaminación',
				'Suciedad',
				'Mucho ruido',
				'Too noisy',
				'Unfriendly staff'
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
			  data: [755, 222, 151, 86, 72, 51, 36, 10]
			}]
		  }


  ngOnInit(): void {
	Highcharts.chart('container', this.options);
  }

}
