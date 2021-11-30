import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function BasicTextFields() {
  let ingredientList = []
  //const ingredientList = React.useState();
  // this.state = {
  //   ingredient1: "",
  //   ingredient2: "",
  //   ingredient3: "",
  //   ingredient4: "",
  //   ingredient5: ""
  // };
  // function handleClick () {console.log(this.state);}
  function handleClick () {
    ingredientList.concat()
  }
  
  const [data, setData] = React.useState([]);
  const [print, setPrint]= React.useState(false);
  const [ingredients, setIngredients] = React.useState([
    {ingName1: "ing1"},
    {ingName2: "ing2"},
    {ingName3: "ing3"},
    {ingName4: "ing4"},
    {ingName5: "ing5"}
  ]);
  // const [ingredients, setIngredients] = React.useState([
  //   {ing1:1, ingName1: "ing1"},
  //   {ing2:2, ingName2: "ing2"},
  //   {ing3:3, ingName3: "ing3"},
  //   {ing4:4, ingName4: "ing4"},
  //   {ing5:5, ingName5: "ing5"}
  // ]);

  const onClickHandler= (val) =>{
    let nObj = {ing:6, ingName: "Test"}
    let newIngredients = ingredients.concat(nObj)
    setIngredients(newIngredients);
  }

  const onClickIngHandler= (ingredients) =>{
    let ingListStringArray = [];
    ingListStringArray.push(ingredients.ingName1);
    ingListStringArray.push(ingredients.ingName2);
    ingListStringArray.push(ingredients.ingName3);
    ingListStringArray.push(ingredients.ingName4);
    ingListStringArray.push(ingredients.ingName5);
    console.log(ingListStringArray);
    return ingListStringArray;
  }
  //let ingredientList = [{"ingr1":""}, {"ingr2":""}, {"ingr3":""}, {"ingr4":""}, {"ingr5":""}];
  //let i = 0;
  function getData(val){

    // setData([... data, {
    //   id: data.length,
    //   value: val.target.value
    // }])

    // for(i = 0; i < val.length; i++){
    //   ingredientList[i] = val.target[i].value
    // }
    //setData(ingredientList)
    //ingredientList.set(ingr1: val.target.value);
    setData(val.target.value)
    //setData(data => [...data, print]);
    //setPrint(false)
    console.log(val)
  }
  

  return (
    <>
    <h2>Search Recipes</h2>
    <Box
      component="form" 
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      {/* <form>
        <label for="ingredient1"> Ingredient 1 : </label>
        <input type="text" id="ingredient1" name="ingredient1" placeholder="ingredient1"
      </form> */}
      <form>
        <input
          type='text'id="Ingredient1" name="ingredient1" label="Ingredient1" variant="outlined" placeholder="Ingredient 1"
          value={ingredients.ingName1}
          onChange={e => setIngredients({...ingredients, ingName1: e.target.value})} 
          />
        <input
          type='text' id="Ingredient2" name="ingredient2" label="Ingredient2" variant="outlined" placeholder="Ingredient 2"
          value={ingredients.ingName2}
          onChange={e => setIngredients({...ingredients, ingName2: e.target.value})} 
          />
        <input
          type='text' id="Ingredient3" name="ingredient3" label="Ingredient3" variant="outlined" placeholder="Ingredient 3"
          value={ingredients.ingName3}
          onChange={e => setIngredients({...ingredients, ingName3: e.target.value})} 
          />
        <input
          type='text' id="Ingredient4" name="ingredient4" label="Ingredient4" variant="outlined" placeholder="Ingredient 4"
          value={ingredients.ingName4}
          onChange={e => setIngredients({...ingredients, ingName4: e.target.value})} 
          />
        <input
          type='text' id="Ingredient5" name="ingredient5" label="Ingredient5" variant="outlined" placeholder="Ingredient 5"
          value={ingredients.ingName5}
          onChange={e => setIngredients({...ingredients, ingName5: e.target.value})} 
          />          
        {/* <h2>First ingredient: {ingredients.ingName1}</h2>
        <h2>Second ingredient: {ingredients.ingName2}</h2>
        <h2>Third ingredient: {ingredients.ingName3}</h2>
        <h2>Fourth ingredient: {ingredients.ingName4}</h2>
        <h2>Fifth ingredient: {ingredients.ingName5}</h2>
        <p>{JSON.stringify(ingredients)}</p> */}
      </form>
      
{/* 
      <TextField id="Ingredient1" name="ingredient1" label="Ingredient1" variant="outlined" />
      <TextField id="Ingredient2" name="ingredient2" label="Ingredient2" variant="outlined" />
      <TextField id="Ingredient3" name="ingredient3 "label="Ingredient3" variant="outlined" />
      <TextField id="Ingredient4" name="ingredient4" label="Ingredient4" variant="outlined" />
      <TextField id="Ingredient5" name="ingredient5" label="Ingredient5" variant="outlined" /> */}
      <Button onClick={()=> {setPrint(true); onClickIngHandler(ingredients);}} variant="contained">Search For Recipes</Button>
{/* 
      {print?
      data: null} */}
 
      {/* <ul>
      {data.map(ing =>(
        <li key={ing.id}>{ing.value}</li>
      ))}
      </ul> */}

      {/* <ul>{
        ingredients.map(pObj=>(
          <li key={pObj.ing}>{pObj.ingName}</li>
        )
        )}
        </ul> */}

    </Box>
    </>
  );
}
