import React, {FC} from 'react';
import {Logo} from "../Logo/Logo";
import {SearchForm} from "../SearchForm/SearchForm";
import "./Header.scss"
import {Link} from "react-router-dom";

type HeaderProps = {

}

export const Header:FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/"><Logo/></Link>
        <SearchForm/>
      </div>
    </header>
  );
}
