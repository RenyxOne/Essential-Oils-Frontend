import React from "react";
import './ActiveButton.scss'

type ActiveButtonProps = {
  name: string;
  isActive: boolean;
  handleClick: () => void;
}

export const ActiveButton: React.FC<ActiveButtonProps> = ({name, isActive, handleClick}) => (
  <button
    className={`active-button ${
      isActive ? 'active-button--active' : ''
    }`}
    onClick={handleClick}
  >
    {name}
  </button>
);
