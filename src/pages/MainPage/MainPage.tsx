import React, {FC, useEffect, useState} from "react";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {CardArea} from "../../components/CardArea/CardArea";
import {ItemCard} from "../../components/ItemCard/ItemCard";
import {Link, useParams} from "react-router-dom";
import {fetchCards} from "../../services/fetchCards";
import {Load} from "../../components/Load/Load";

const loadCards = async (value: string, mode: string, setLoad: React.Dispatch<any>, setData: React.Dispatch<any>) => {
  setLoad(true);
  const item = await fetchCards(value, mode);
  setData(item);
  setLoad(false);
}

export const MainPage:FC = () => {
  const params = useParams();
  console.log(params);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([] as Array<{image: string, title: string}>);

  useEffect(() => {
    if (params.value && params.mode)
      loadCards(params.value, params.mode, setLoad, setData);
    else
      loadCards('', '', setLoad, setData);
  }, [params]);


  return <>
    <Header/>
    <main>
      {load ? <Load/> :
        <CardArea>
          {
            data.map((item, index) => <Link to={`/item/${index}`}><ItemCard image={item.image} title={item.title} /></Link>)
          }
        </CardArea>}
    </main>
    <Footer/>
  </>
}
