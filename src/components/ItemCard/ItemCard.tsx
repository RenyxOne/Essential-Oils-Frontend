import {FC} from "react";
import "./ItemCard.scss"
import {ImageSmart} from "../Image/Image";

type ItemCardProps = {
  image: string;
  title: string;
}

export const ItemCard:FC<ItemCardProps> = ({image, title}) =>
  <div className="item-card">
      <ImageSmart className={"item-card__image"} src={image}/>
      <div className="item-card__title-container">
        <div className="item-card__title">
          {title}
        </div>
      </div>
  </div>
