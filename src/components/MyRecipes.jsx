import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import MyRecipesCard from './MyRecipesCard'
import axios from 'axios'

const MyRecipes = () => {
  const [data,setData] = useState([])
  const config = {
    headers: {
        'Content-Type' : 'application/json'
     },
     withCredentials : true
  };
 useEffect(()=>{
    axios.get('http://localhost:7000/api/users/myRecipes',config )
    .then(res => setData(res.data.recipe))
    .catch(err => console.error(err));
 },[])
  return (
    <>
    <NavBar/>
    <div className="container d-flex flex-wrap gap-5 ">
        {
        data.map((e,i)=> {
          return (
            <MyRecipesCard key={i} name={e.name} id={e._id} ingredients={e.ingredients} img={e.img} steps={e.steps} cookingTips={e.cookingTips} cuisine={e.cuisine} type={e.type} />
          )
        })}
      </div>
    </>
  )
}

export default MyRecipes