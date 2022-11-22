import { Component, OnInit } from '@angular/core';
//import * as introJs from 'intro.js/intro.js';
//import introJS from 'intro.js/minified/intro.min.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  intro(){
    let introJs = require('intro.js/intro.js');
    introJs().start();
  }

  

}