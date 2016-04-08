import React from 'react';
import ReactDOM from 'react-dom';
import BracketsDestroyerBox from './components/BracketsDestroyerBox.jsx';
import bracketsDestroyerService from './brackets-destroyer-service.js';

var bdService = bracketsDestroyerService.service;
var defaultExpression = "5 * (1 + sin(2))";
bdService.initialize(defaultExpression);
console.log(1);

ReactDOM.render(
    <BracketsDestroyerBox bracketsDestroyerService={bdService}/>,
    document.getElementById('destroyerContainer')
);