import React from 'react';
import'./cards.scss';

function Card (props) { 
  
   const {name, price, speed, text, isSelected} = props;
   return (
    <div className="App"> 
    
       <div className={"card " + (isSelected? "selected":" ")}>
         <div className="card-name">{props.name}</div>
         <div className="card-price"> {props.price}</div>
         <div className="card-speed"> {props.speed}</div>
         <div className="card-text"> {props.text}</div>
         </div>
         </div>
   );
  }
  export default Card;
  