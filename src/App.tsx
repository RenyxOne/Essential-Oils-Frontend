import React from 'react';
import './App.scss';
import {ItemCard} from "./components/ItemCard/ItemCard";
import {CardArea} from "./components/CardArea/CardArea";
import {LeftRight} from "./components/LeftRight/LeftRight";
import {SearchForm} from "./components/SearchForm/SearchForm";
import {Header} from "./components/Header/Header";
import {MainPage} from "./pages/MainPage/MainPage";
import {TextBlock} from "./components/TextBlock/TextBlock";
import {Item} from "./components/Item/Item";
import {ItemPage} from "./pages/MainPage/ItemPage";

const textt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam atque commodi consectetur dolor eius, ex, explicabo fuga id impedit, maxime molestiae nam necessitatibus odio officia perspiciatis provident quas quidem quisquam quos repellendus repudiandae saepe similique temporibus unde vel voluptatibus. Adipisci amet architecto assumenda aut blanditiis consequatur dicta dolorum, ea et eveniet fugiat harum id impedit incidunt ipsam iure magni mollitia numquam odio optio perspiciatis porro possimus provident quae quas quo quod temporibus tenetur, veritatis voluptatum. Aspernatur autem commodi deserunt doloribus et fugit itaque minus nemo nihil, nobis nostrum numquam odio pariatur perferendis quae, quia repellat suscipit tempora velit voluptate."

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
      {/*<ItemPage/>*/}
    </div>
  );
}

export default App;
