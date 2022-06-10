import React, {FC} from "react";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {CardArea} from "../../components/CardArea/CardArea";
import {ItemCard} from "../../components/ItemCard/ItemCard";

const arr:Array<{image:string, title:string}> = [];
for (let i = 0; i < 10; i++) {
  arr.push({
    image: i%2 ? "https://www.doterra.com/medias/2x3-5ml-arbovitae.png?context=bWFzdGVyfHJvb3R8Mzg2MTN8aW1hZ2UvcG5nfGgzYy9oMTQvMjc5OTAzOTMxMjY5NDIucG5nfGZlZjI5ZTU1NjA5NjJlODg1ODg0OGRiNGI1Zjk3ZDRiZjYzMjY4YTc3NTUwNDlkYWNhYjczM2I5YWEyYWQzODM"
      : "https://www.doterra.com/medias/2x3-10ml-frankincense.png?context=bWFzdGVyfHJvb3R8MzM0OTV8aW1hZ2UvcG5nfGg4My9oMjEvMjc5OTAzOTY3MzE0MjIucG5nfGM4NDhmYjU5OGI2ZjUwNTZmY2E0NDdkNmFmYjFiOGRkNzU3ZjkzMWVmZWE3Yjk3M2NiYjdmODRkYzNmZWUzN2E",
    title: i % 2 ? "Arborvitae Oil" : "Frankincense Touch"
  })
}
arr[4].image = "sdasda";

export const MainPage:FC = () => {
  return <>
    <Header/>
    <main>
        <CardArea>
          {
            arr.map((item, index) => <ItemCard image={item.image} title={item.title} key={index}/>)
          }
        </CardArea>
    </main>
    <Footer/>
  </>
}
