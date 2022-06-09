import React, {FC} from "react";
import "./Button.scss"
import cn from "classnames"

type DefButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: Array<String>;
  children: React.ReactNode;
}

export const Button: FC<DefButtonProps> = ({onClick, className, children}) =>
  <button onClick={onClick} className={cn('btn',className)}>
    <div className="btn__content-wrapper">
      {children}
    </div>
  </button>
