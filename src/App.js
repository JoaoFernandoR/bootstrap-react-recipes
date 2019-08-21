import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {recipes} from './tempList'
import axios from 'axios'
// Componentes
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'


export default class App extends Component {

  state = {
    recipes : recipes,
    details_id : 35383,
    index : 0
  }
  
  getData = async () => {
    await axios.get('https://www.food2fork.com/api/search?key=613c47518f2bcaf69924608051d67611')
      .then((response) => this.setState({recipes : response.data.recipes}))
      .catch((error) => console.log(error))
  }


  handlePages = () => {
    if (!this.state.index) return <RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails}/>
    else return <RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex}/>
  }

  handleIndex = () => {
    this.setState({index : !this.state.index})
  }

  handleDetails = (id) => {
    this.setState({index : !this.state.index})
    this.setState({details_id : id})
  }

  render() {
    return (
      <React.Fragment>
      {this.handlePages()}
        <button className='btn btn-primary' onClick={this.getData}> API Call </button>
      </React.Fragment>
    );
  }
}
