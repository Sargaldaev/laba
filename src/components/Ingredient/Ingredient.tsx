import React from 'react';

interface Iprops {
  img:string;
  name:string;
  count:number | string;
  onImgClick:React.MouseEventHandler;
  onBtnClick:React.MouseEventHandler;
}
const Ingredient:React.FC<Iprops> = props => {
  return (

      <div className="Ingredient">
        <img src={props.img} alt={props.name} className="img" onClick={props.onImgClick}/>
        <p>{props.name}</p>
        <p>{props.count}</p>
        <button className="btn" onClick={props.onBtnClick}>remove</button>
      </div>

  );
};

export default Ingredient;