import React, {FC, useEffect, useState} from "react";
import {Header} from "../../components/Header/Header";
import {Item} from "../../components/Item/Item";
import {Footer} from "../../components/Footer/Footer";
import {useParams} from "react-router-dom";
import {fetchItem} from "../../services/fetchCards";
import {Load} from "../../components/Load/Load";

const loadInfo = async (id: string, setLoad: React.Dispatch<any>, setItem:  React.Dispatch<any>) => {
  setLoad(true);
  const item = await fetchItem(id);
  setItem(item);
  setLoad(false);
}

export const ItemPage:FC = () => {
  const params = useParams();
  const [load, setLoad] = useState(false);
  const [item, setItem] = useState({img: '', name: '', aroma: '', description: '', usage: '', benefits: []});

  useEffect(() => {
    if (params.id)
      loadInfo(params.id, setLoad, setItem);
  }, [params]);


  return (
    <>
      <Header/>
      <main>
        {load ? <Load/> : <Item img={item.img} name={item.name} aroma={item.aroma} description={item.description} usage={item.usage} benefits={item.benefits}/>}
      </main>
      <Footer/>
    </>
  );
}
