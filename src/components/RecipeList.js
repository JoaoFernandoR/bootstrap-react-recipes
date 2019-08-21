import React from 'react';
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

export default function RecipeList(props){
    const {recipes, handleDetails, handleSubmit, value, handleChange, error} = props
    return (
        <React.Fragment>
            <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
            <div className="container my-5">
                {/* Title */}
                <div className="row">
                    <div className="col-10 mx-auto text-slanted text-center col-md-6 mb-3">
                        <h1>Recipe List</h1>        
                {error && <h1 className='text-slanted text-danger text-center'> Não há receitas com essa busca </h1>}
                    </div>
                </div>
                {/* End of Title */}
                <div className="row">
                {recipes.map(recipe => <Recipe recipe={recipe} 
                    key={recipe.recipe_id} handleDetails={handleDetails}/>) }
                </div>
            </div>
        </React.Fragment>
    )
}

