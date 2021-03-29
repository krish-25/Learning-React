import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css/normalize.css'
import './styles/styles.scss';
console.log('app.js is running')

var template = <h1>does it change</h1>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);