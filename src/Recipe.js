import React from 'react';
import style from './recipe.module.css'


const Recipe = ({title, image, calories, ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol className={style.list}>
                {ingredients.map(i =>(
                    <li >{i.text}</li>
                ))}
            </ol>
            <p>{calories.toFixed(0)} cal.</p>
            <img className={style.imageClass} alt="" src={image}></img>
            
        </div>
    );
}

export default Recipe;