import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCheckSquare} from '@fortawesome/free-solid-svg-icons'


library.add(faCoffee, faCheckSquare)

ReactDOM.render(<App />, document.getElementById('root'));
