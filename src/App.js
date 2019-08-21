import React, { Component } from 'react';
import {recipes} from './tempList'
import axios from 'axios'
// Componentes
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'


export default class App extends Component {

  state = {
    recipes : recipes,
    url : 'https://www.food2fork.com/api/search?key=613c47518f2bcaf69924608051d67611',
    base_url : 'https://www.food2fork.com/api/search?key=613c47518f2bcaf69924608051d67611',
    details_id : 35383,
    index : 0, 
    search : '',
    query : '&q=',
    error : false
  }
  
  getData = async () => {
    this.setState({error : false})
    await axios.get(this.state.url)
      .then((response) => {
        this.setState({recipes : response.data.recipes})
        if (response.data.recipes.length === 0) {
           this.setState({error : true}) }
      })
      .catch((error) => console.log(error))
  }

  componentDidMount() {
    this.getData()
  }

  handlePages = () => {
    if (!this.state.index) return <RecipeList 
    recipes={this.state.recipes} 
    handleDetails={this.handleDetails}
    handleChange={this.handleChange}  
    handleSubmit={this.handleSubmit}
    value={this.state.search}
    error={this.state.error}
    />
    else return <RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex}/>
  }

  handleIndex = () => {
    this.setState({index : !this.state.index})
  }

  handleDetails = (id) => {
    this.setState({index : !this.state.index})
    this.setState({details_id : id})
  }

  handleChange = (e) => {
    this.setState({
      search : e.target.value
    }) 
  }

  handleSubmit= (e) => {
    e.preventDefault()
    const {base_url, query, search} = this.state

    this.setState({
      url : `${base_url}${query}${search}`,
      search : ''
    }, () => this.getData())
  }

  render() {
    return (
      <React.Fragment>
      {this.handlePages()}
      </React.Fragment>
    );
  }
}
