import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class App extends Component {
  render() {
    return (
      <div>
        <div className='text-warning display-2'> Hello from App </div>
        <FontAwesomeIcon icon="coffee" size="2x" />
      </div>
    );
  }
}
