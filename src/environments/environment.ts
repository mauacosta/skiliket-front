// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  climaApiUrl: 'https://open-weather13.p.rapidapi.com/city/mexico%20city',
  XRapidAPIHostLabel: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'open-weather13.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: '117e5349c3mshf6db570f4919973p1c8aedjsnba7adc1dcc02'
};

export const firebaseConfig = {
  apiKey: "AIzaSyAY41XV2sUpxLEAlCU4ji-Lv9TSHqmtnbY",
  authDomain: "smooth-league-364220.firebaseapp.com",
  projectId: "smooth-league-364220",
  storageBucket: "smooth-league-364220.appspot.com",
  messagingSenderId: "214332462127",
  appId: "1:214332462127:web:a5d8db5170bef4b09f62da"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
