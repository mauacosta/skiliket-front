import { Component, OnInit } from '@angular/core';
import { SelectorMatcher } from '@angular/compiler';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA7GsOwfNZCUxEgql1OCQz8kL8v5dfSY58",
	authDomain: "skiliket.firebaseapp.com",
	projectId: "skiliket",
	storageBucket: "skiliket.appspot.com",
	messagingSenderId: "468042430283",
	appId: "1:468042430283:web:ff04ddeb88bb1e673c9ace",
	measurementId: "G-W2ZTBKBBCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

var email 		= "rob@rob.com";
var password 	= "123456";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	mostrar: boolean = true;
	contador: number = 0;
	constructor() { }

	ngOnInit(): void {
		if(this.contador > 0){
			this.mostrar = false;
		}
	}

	iniciarSesion() {

		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in

			const user = userCredential.user;

			alert("Signed in");

			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;

			alert(errorMessage);

		});
		
		this.mostrar = false;

	}

}
