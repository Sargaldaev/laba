import React, {useState} from 'react';
import './App.css';
import meat from './assets/meat.png';
import cheese from './assets/cheese.png';
import salad from './assets/salad.png';
import bacon from './assets/bacon.png';
import Ingredient from './components/Ingredient/Ingredient';
import Burger from './components/Burger/Burger';

 interface IIngredient {
  name: string;
  price: number;
  image: string;
}

 export interface IIngredientsState {
  name: string;
  count: number;
}

const INGREDIENTS: IIngredient[] = [
  {name: 'Salad', price: 10, image: salad},
  {name: 'Cheese', price: 50, image: cheese},
  {name: 'Meat', price: 80, image: meat},
  {name: 'Bacon', price: 60, image: bacon},
];
const App = () => {

    const [ingredients, setIngredients] = useState<IIngredientsState[]>([
        {name: 'Salad', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Meat', count: 0},
        {name: 'Bacon', count: 0},
      ]
    );

    const setCount = (index: number) => {
      const copyIngs = [...ingredients];
      const copyIng = {...copyIngs[index]};
      copyIng.count++;
      copyIngs[index] = copyIng;
      setIngredients(copyIngs);
    };

    const removeCount = (index: number) => {
      const copyIngs = [...ingredients];
      const copyIng = {...copyIngs[index]};
      copyIng.count = copyIng.count ? copyIng.count - 1 : 0;

      copyIngs[index] = copyIng;
      setIngredients(copyIngs);

    };

    return (
      <div className="App">
        <div className="main">
          {
            ingredients.map((ingredient, index) => {
              return (
                <Ingredient img={INGREDIENTS[index].image}
                            name={INGREDIENTS[index].name}
                            count={ingredients[index].count + 'x'}
                            onImgClick={() => {
                              setCount(index);
                            }}
                            onBtnClick={() => {
                              removeCount(index);
                            }}
                />
              );
            })
          }
        </div>
        <Burger
          ingredientsState={ingredients}

        />
      </div>
    );
  }
;


export default App;

