import {FC} from "react";
import "./ItemCard.scss"
import {ImageSmart} from "../Image/Image";
import cn from "classnames";

type ItemCardProps = {
  image: string;
  title: string;
  type: 'big' | 'small' ;
}

export const ItemCard:FC<ItemCardProps> = ({image, title, type}) =>
  <div className={cn("item-card", `item-card--${type}`)}>
      <ImageSmart className={"item-card__image"} src={image}/>
      <div className="item-card__title-container">
        <div className="item-card__title">
          {title}
        </div>
      </div>
  </div>
