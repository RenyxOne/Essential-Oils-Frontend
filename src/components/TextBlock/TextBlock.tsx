import {FC, ReactNode} from "react";
import "./TextBlock.scss"

type TextBlockProps = {
  title?: string;
  children: ReactNode;
}

export const TextBlock:FC<TextBlockProps> = ({title, children}) => {
  return (
    <div className="text-block">
      {
        title ?
          <h2 className="text-block__title">
            {title}
          </h2>:
        <></>
      }
      <div className="text-block__text">
        {children}
      </div>
    </div>
  )
}
