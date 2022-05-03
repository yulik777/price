import React from 'react';
import'./cards.scss';

function Card (props) { 
  
   const {name, price, speed, isSelected} = this.props;
   return (
    <div className="App"> 
       <div className={"card " + (isSelected? "selected":" ")}>
         <div className="card-name">{props.name}</div>
         <div className="card-text"> Объем трафика не ограчинен</div>
         <div className="card-speed"> {props.speed}</div>
         <div className="card-price"> {props.price}</div>
         <div> <button className='button'>Buy</button></div>
         </div>
         </div>
   );
  }
  export default Card;
  