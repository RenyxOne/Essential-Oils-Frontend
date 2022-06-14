import React, {FC, useEffect, useState} from "react";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {CardArea} from "../../components/CardArea/CardArea";
import {ItemCard} from "../../components/ItemCard/ItemCard";
import {Link, useParams} from "react-router-dom";
import {fetchInfo} from "../../services/fetchInfo";
import {Load} from "../../components/Load/Load";
import {NoMatches} from "../../components/NoMatches/NoMatches";

const loadCards = async (value: string, mode: string, setLoad: React.Dispatch<any>, setData: React.Dispatch<any>) => {
  setLoad(true);
  const item = await fetchInfo(value, mode);
  setData(item);
  setLoad(false);
}

export const MainPage:FC = () => {
  const params = useParams();
  const [load, setLoad] = useState(false);
  const [arr, setArr] = useState([] as Array<{id:number, image: string, title: string}>);

  useEffect(() => {
    if (params.value && params.mode)
      loadCards(params.value, params.mode, setLoad, setArr);
    else
      loadCards('', '', setLoad, setArr);
  }, [params]);

  return <>
    <Header/>
    <main>
      {load ? <Load/> :
        (arr.length > 0 ? (
              <CardArea>
              {
                arr.map((item, index) => <Link to={`/item/${item.id}`} key={index}><ItemCard image={item.image} title={item.title} type='big'/></Link>)
              }
              </CardArea>
            ) :
            <NoMatches></NoMatches>
        )
      }
    </main>
    <Footer/>
  </>
}
