import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function RecipeSearch(props){
    const {value, handleSubmit, handleChange} = props

    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <h1 className='text-slanted'> 
            Search for Recipe With <strong className='text-danger'>Food2Fork</strong>
            </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search" className="my-3"> Type Recipes Separated by Comma</label>
                <div className="input-group">
                <input
                  id='search'
                  className="form-control" 
                  placeholder='chicken, carrots, onions'
                  type="text" 
                  value={value}
                  onChange={handleChange}  
                  />
                  <div className="input-group-append">
                    <button className="input-group-text bg-primary"  type='submit'>
                      <span>
                        <FontAwesomeIcon icon="search" />
                      </span>
                    </button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>      
    );
  }

