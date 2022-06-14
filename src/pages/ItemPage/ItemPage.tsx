import React, {FC, useEffect, useState} from "react";
import {Header} from "../../components/Header/Header";
import {Item} from "../../components/Item/Item";
import {Footer} from "../../components/Footer/Footer";
import {useParams} from "react-router-dom";
import {fetchItem, fetchSimilarCards} from "../../services/fetchInfo";
import {Load} from "../../components/Load/Load";
import {SimilarBlock} from "../../components/SimilarBlock/SimilarBlock";

const loadInfo = async (id: string,
                        setLoadItem: React.Dispatch<any>,
                        setItem: React.Dispatch<any>,
                        setCards: React.Dispatch<any>) => {
  setLoadItem(true);
  const item = await fetchItem(id);
  setItem(item);
  setLoadItem(false);

  const cards = await fetchSimilarCards(id);
  setCards(cards);
}

export const ItemPage:FC = () => {
  const params = useParams();
  const [loadItem, setLoadItem] = useState(false);
  const [item, setItem] = useState({img: '', name: '', aroma: '', description: '', usage: [], benefits: [], warnings: ''});
  const [cards, setCards] = useState([] as Array<{id: number, img: string, name: string}>);

  useEffect(() => {
    if (params.id)
      loadInfo(params.id, setLoadItem, setItem, setCards);
  }, [params]);

  return (
    <>
      <Header/>
      <main>
        {loadItem ? <Load/> :
          (
            <>
            <Item img={item.img} name={item.name} aroma={item.aroma} description={item.description} usage={item.usage} benefits={item.benefits} warnings={item.warnings}/>
            {
              cards.length ?
              <SimilarBlock cards={cards}/>:<></>
            }
            </>
          )}
      </main>
      <Footer/>
    </>
  );
}
