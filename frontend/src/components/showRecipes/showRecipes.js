import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import RecipesList from '../recipes/RecipesList';
import ingListStringArray from '../searchRecipes/searchRecipes.js';


export default function FoundRecipes() {
  
const [recipes, setRecipes] = useState([]);
useEffect(() => {
  axios
  .get("http://localhost:5000/api/v1/restaurants")
  .then(({data}) => setRecipes(data.recipes))
  .catch((error) => console.log(error));
}, []);
//console.log(recipes)


  /*
  const [listOfRecipes, setListOfRecipes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/restaurants")
    .then((response) => {
      setListOfRecipes(response.data)
    })
  }, []);
  console.log(listOfRecipes)
  */

 /*
 const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:5000/api/v1/restaurants")
    .then(res=> setData(res.data))
    .catch(error => console.log(error));
  });
  console.log(data);
  */


 /* const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
      useEffect(() => {
        fetch("http://localhost:5000/api/v1/restaurants")
          .then((response) => {
            return response.json();
          }) 
          .then((data) => {
            const recipes = [];
            for (const key in data) {
              const recipe = {
                id: key,
                ...data[key]
              };
              recipes.push({recipe})
            }
            setIsLoading(false);
            setData(recipes);
          })
          }, []);
          
          if(isLoading) {
            return (
              <section>
                <p>Loading...</p>
              </section>
            );
          }
          console.log(data); */

  /*  
  return (
    <section>
      <h1>Recipes Found:</h1>
      <p>{recipes[0].recipeName}</p>

    </section>    
  ) 
  */

  return recipes.map((recipe, index) => (
    <div key={index}>
      <h3>{recipe.recipeName}</h3>
    <ul>
      <li>{recipe.ingredients}</li>
    </ul>
    <ul>
      <li>{recipe.steps}</li>
    </ul>
    
    </div>
    
    )
  )
}

