import React, {FC} from "react";
import {CardArea} from "../CardArea/CardArea";
import {Link} from "react-router-dom";
import {ItemCard} from "../ItemCard/ItemCard";
import "./SimilarBlock.scss"

type SimilarBlockProps = {
  cards: Array<{id: number; name: string, img: string}>;
}

export const SimilarBlock:FC<SimilarBlockProps> = ({cards}) =>
  <div className="similar-block">
    <div className="similar-block__container">
      <h2 className="similar-block__title">Похожие</h2>
      <CardArea>
        {cards.map((item, index) => (
          <Link to={`/item/${item.id}`} key={index}>
            <ItemCard image={item.img} title={item.name} type='small'/>
          </Link>
        ))}
      </CardArea>
    </div>
  </div>
