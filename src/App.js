import React from 'react';
import logo from './logo.svg';
import styles from './App.css';

import Card from './components/cards.jsx';

const cards = [
  {
    name:"Безлимитный 300",
    price:"300",
    speed:"10мБит/c"
  },
  {
    name:"Безлимитный 450",
    price:"450",
    speed:"10мБит/c"
  },
  {
    name:"Безлимитный 550",
    price:"550",
    speed:"10мБит/c",
    isSelected: true
  },
  {
    name:"Безлимитный 1000",
    price:"1000",
    speed:"10мБит/c"
  }
]

function App (){ 
  
  return (
    <div>
    <div className={this.props.theme.App}>
    {
      cards.map((card) =>
      <Card name={card.name} price={card.price} speed={card.speed} 
      isSelected={card.isSelected}></Card>
      )
  }
</div>
    <div className="App-button-container">
      <button >Try now</button>
    </div>
    </div>
  );
}

export default App;
//React.Fragment  - пишем вместо div, если нужно спрятать див б если он нам мешает
//<Cat></Cat>  - функция, импортирована с документа cat.jsx (там мы на писали код)

//import Cat from './Cat'; - обязательно сверху допечать импорт
/*<div className="App"> 
    <Cat name={cats[0].name} url={cats[0].url}></Cat>  обращаемся к массиву json сверху
    <Cat name="Барсик" url="https://www.sunny-cat.ru/datas/users/1-olnara007.jpg"></Cat> 
    <Cat name="Снежок"url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYtJewuffJ_fR_hVmH5_X-JxCt0OLkagAQuXJAN2zGxA-z4kTpdtGkuiFmhQU85uwC0s&usqp=CAU"></Cat> 
    </div>*/
// <Cat name={cat.name}></Cat> в {} пишутся переменные
// <div className={this.props.theme.App}> выбиратем тему, которая прописана в index.js
