import React from 'react';
import Recipe from './Recipe'

export default function RecipeList(props){
    const {recipes, handleDetails} = props
    return (
        <div className="container my-5">
            {/* Title */}
            <div className="row">
                <div className="col-10 mx-auto text-slanted text-center col-md-6 mb-3">
                    <h1>Recipe List</h1>        
                </div>
            </div>
            {/* End of Title */}
            <div className="row">
            {recipes.map(recipe => <Recipe recipe={recipe} 
                key={recipe.recipe_id} handleDetails={handleDetails}/>) }
            </div>
        </div>
    )
}

