import {FC} from "react";
import {ImageSmart} from "../Image/Image";
import {TextBlock} from "../TextBlock/TextBlock";
import "./Item.scss"

type ItemProps = {
  img: string;
  name: string;
  aroma: string;
  description: string;
  usage: Array<{title: string, text: string}>;
  benefits: string[];
  warnings: string;
}

export const Item:FC<ItemProps> = ({img, name, aroma, description, usage, benefits, warnings}) => (
  <div className="item">
    <div className="item__container">
      <div className="item__column">
        <ImageSmart src={img} className="item__image"/>
        <TextBlock title="Достоинства">
          <ul>
            {benefits.map((item, index)=> (<li key={index}><p>{item}</p></li>))}
          </ul>
        </TextBlock>
      </div>
      <div className="item__column">
        <h2 className="item__name">
          {name}
        </h2>
        <TextBlock title="Аромат">
          {aroma}
        </TextBlock>
        <TextBlock title="Описание">
          {description}
        </TextBlock>
        <TextBlock title="Применение">
          {usage.map((item, index) => <div key={index}><b>{item.title}:</b> {item.text}</div>)}
        </TextBlock>
        {
          warnings ?
          <TextBlock title="Меры предосторожности">
            {warnings}
          </TextBlock> : <></>
        }
      </div>
    </div>
  </div>
);
