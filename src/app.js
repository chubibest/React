import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from '../components/indecision'
import './styles/styles.scss'


const displayDiv = document.querySelector('#app')

ReactDOM.render(<IndecisionApp/>, displayDiv)