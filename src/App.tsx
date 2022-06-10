import React from 'react';
import './App.scss';
import {ItemCard} from "./components/ItemCard/ItemCard";
import {CardArea} from "./components/CardArea/CardArea";
import {LeftRight} from "./components/LeftRight/LeftRight";
import {SearchForm} from "./components/SearchForm/SearchForm";
import {Header} from "./components/Header/Header";
import {MainPage} from "./pages/MainPage/MainPage";



function App() {

  return (
    <div className="wrapper">
      {/*<Header/>*/}
      {/*<main>*/}

      {/*  <CardArea>*/}
      {/*    {*/}
      {/*      arr.map((item, index) => <ItemCard image={item.image} title={item.title} key={index}/>)*/}
      {/*    }*/}
      {/*  </CardArea>*/}
      {/*</main>*/}
      <MainPage/>
    </div>
  );
}

export default App;
