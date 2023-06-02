import React from 'react';
import './Burger.css'
import {IIngredientsState} from '../../App';

interface Iprops {
  ingredientsState:IIngredientsState[];
  price:number
}
const Burger:React.FC<Iprops> = props => {


  const getIngredient = (count:number,name:string) => {
    const ingredientDivs = []

    for (let i = 0; i < count; i++) {
      ingredientDivs.push(<div className={name}></div>)
    }
    return ingredientDivs
  }

  return (
    <div className="burger-wrapper">
      <p className="price">Price:{props.price}coм</p>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {
          props.ingredientsState.map(ingredient => getIngredient(ingredient.count,ingredient.name ))

        }
        <div className="BreadBottom"></div>
      </div>

    </div>
  );
};

export default Burger;