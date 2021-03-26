import React from "react";
import ReactDOM from "react-dom";

import './utils.js'
console.log('app.js is running')

var template = <p>does it change</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);