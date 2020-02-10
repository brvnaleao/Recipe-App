import React, {useEffect, useState}from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe.js' 

const App = () =>{

/**  change the string in APP_ID and APP_KEY to your credentials at edamam API, at recipe api tab*/
const APP_ID = "";
const APP_KEY = "";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken')

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };
    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  };


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" value={search} onChange={updateSearch} type="text"></input>
        <button className="search-button"  type="submit">Search</button>
      

      </form>
      <div className="recipe-component">
        {recipes.map(recipe =>(
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label}  ingredients={recipe.recipe.ingredients} calories={recipe.recipe.calories} image= {recipe.recipe.image}/>
        ))}
      </div>
    </div>

  );

}

export default App;
