import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCheckSquare, faSearch} from '@fortawesome/free-solid-svg-icons'
// CSS
import './estilos.css'

library.add(faCoffee, faCheckSquare, faSearch)

ReactDOM.render(<App />, document.getElementById('root'));
