import React from 'react';
import logo from './logo.svg';
import styles from './App.css'

import Card from './components/cards.jsx';

const cards = [
  {
    name:"Безлимитный 300",
    price:"300",
    speed:"до 10 мБит/cек",
    text:"Объем включенного трафика не ограничен"
  },
  {
    name:"Безлимитный 450",
    price:"450",
    speed:"до 50 мБит/cек",
    text:"Объем включенного трафика не ограничен"
  },
  {
    name:"Безлимитный 550",
    price:"550",
    speed:"до 100 мБит/cек",
    text:"Объем включенного трафика не ограничен",
    isSelected: true
  },
  {
    name:"Безлимитный 1000",
    price:"1000",
    speed:"до 200 мБит/cек",
    text:"Объем включенного трафика не ограничен"
  }
]

function App (){ 
  
  return (
    <div>
    <div className={App}>
  <div className='container'>
    {
      cards.map((card) =>
      <Card name={card.name} price={card.price} speed={card.speed} text={card.text}
      isSelected={card.isSelected}></Card>
      )
  }
  </div>
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
