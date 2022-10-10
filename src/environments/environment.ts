  import { env } from './environment-env';

  if(!env) {
    throw new Error('Bro, te falta el archivo environment-env.ts. Si no sabes como preguntale al Mau.');
  }
  
  export const environment = {
    production: false,
    climaApiUrl: env.weather.climaApiUrl,
    XRapidAPIHostLabel: env.weather.XRapidAPIHostLabel,
    XRapidAPIHostHeaderValue: env.weather.XRapidAPIHostHeaderValue,
    XRapidAPIKeyHeaderName: env.weather.XRapidAPIKeyHeaderName,
    XRapidAPIKeyHeaderValue: env.weather.XRapidAPIKeyHeaderValue,
  };
  
  export const firebaseConfig = {
    apiKey: env.firebase.apiKey,
    authDomain: env.firebase.authDomain,
    projectId: env.firebase.projectId,
    storageBucket: env.firebase.storageBucket,
    messagingSenderId:  env.firebase.messagingSenderId,
    appId: env.firebase.appId,
  };