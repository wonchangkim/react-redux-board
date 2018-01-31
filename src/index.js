import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC3WoKqZDRolSPei9Dd12YYAbZN5xn4unU",
  authDomain: "final-board.firebaseapp.com",
  databaseURL: "https://final-board.firebaseio.com",
  projectId: "final-board",
  storageBucket: "",
  messagingSenderId: "762408960996"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// !!!
//!!!
