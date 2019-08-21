import React, {Component} from 'react';
import { recipe } from '../tempDetails'
import axios from 'axios'

export default class RecipeDetails extends Component {
	
	constructor(props) {
		super(props)

		this.state = {
			recipe: recipe,
			url : `https://www.food2fork.com/api/get?key=613c47518f2bcaf69924608051d67611&rId=${this.props.id}`
		}

	}
	
	async componentDidMount() {
		await axios.get(this.state.url)
		.then((response) => {
			this.setState({recipe : response.data.recipe})
		})
		.catch((error) => console.log(error))
	}
	
	render() {
		
	const { image_url, ingredients, publisher, publisher_url, title, source_url} = this.state.recipe

	return(
	<div className="container p-4">
      <div className="row">
        <div className="col-10 mx-auto col-md-6">
          <button className='btn btn-warning mb-5' onClick={() => this.props.handleIndex()}> 
		  	Back to Recipe List 
		  </button>
          <img src={image_url} alt="" width='100%' />
        </div>
        <div className="col-10 mx-auto col-md-6">
          <h4>{title}</h4>
          <h6 className='text-slanted text-warning my-3'> Provided by {publisher}</h6>
          <a href={publisher_url} className='btn btn-primary' target='_blank' rel="noopener noreferrer"> 
           Publisher WebPage 
          </a>
          <a href={source_url} className= 'btn btn-success ml-3' target='_blank' rel="noopener noreferrer">
            Recipe Url
          </a>
          <h2 className='my-4'> Ingredients </h2>
          <ul className='list-group'>
            {ingredients.map((item, index) => <p key= {index} className='list-group-item text-slanted'> {item }</p>)}
          </ul>
        </div>
      </div>
    </div>
	)
	}

} 