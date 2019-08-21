import React from 'react';

export default function Recipe(props) {
  const {recipe_id, image_url, title, publisher, source_url} = props.recipe
  const {handleDetails} = props

  return (
    <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
      <div className="card">
        <img src={image_url} alt='' className="card-img-top" style={{height : '14rem'}} />
        <div className="card-header">
          <h4>{title}</h4>
          <h6 className='text-slanted text-warning my-3'> Provided by {publisher}</h6>
        </div>
        <div className="card-footer">
          <button className='btn btn-primary' onClick={() => handleDetails(recipe_id)}>
           Details
          </button>
          <a href={source_url} className= 'btn btn-success ml-3' target='_blank' rel="noopener noreferrer">
            Recipe Url
          </a>
        </div>
      </div>
    </div>
  )
}