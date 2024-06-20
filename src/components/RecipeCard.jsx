import React from 'react'

const RecipeCard = ({name,ingredients,img,steps,cookingTips,cuisine,type}) => {
  return (
    <>
        <div className="card mt-4 cardBackground " style={{width: "20rem"}}>
        <img src={img} className="card-img-top" alt="RecipeImage" height="200px"/>
        <div className="card-body">
            <h2 className="card-title text-success">{name}</h2>
            {/* <h6 className='card-text'>UserName</h6> */}
            <span className="card-text text-success"><strong>Ingredients : </strong></span>
            <span className="card-text ">{ingredients}</span>
            <p className="card-text ">{steps}</p>
            <p><strong className='text-success'>Cooking Tips : </strong>{cookingTips}</p>
            <p><strong className='text-success'>Cuisine : </strong>{cuisine}</p>
            <p><strong className='text-success'>Type : </strong>{type}</p>
        </div>
        </div>
    </>
  )
}

export default RecipeCard