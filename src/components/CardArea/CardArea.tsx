import {FC, ReactNode} from "react";
import "./CardArea.scss"

type CardAreaProps = {
  children: Array<ReactNode>;
}

export const CardArea: FC<CardAreaProps> = ({children}) => (
  <div className="card-area">
    {
      children.map((item, index) => <div className="card-area__item" key={index}>{item}</div>)
    }
  </div>
);
