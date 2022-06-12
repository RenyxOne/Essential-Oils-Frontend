import React, {FC, useState} from 'react';
import "./SearchForm.scss"
import {ActiveButton} from "../ActiveButton/ActiveButton";
import {Link} from "react-router-dom";

type SeachFormProps = {}

export const SearchForm: FC<SeachFormProps> = ({}) => {
  const [val,setVal] = useState('');
  const [mode, setMode] = useState('name');

  const handleValChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setVal(e.target.value);
  }

  return (
    <div className="search-container">
      <div className="search-form">
        <input
          type="search"
          id="site-search"
          name="q"
          placeholder="Your search input"
          className="search-form__input"
          onChange={handleValChange}
        />
        <div className="search-form__additions">
          <div className="search-form__search-by">
            <span>search by </span>
            <ActiveButton name="name" isActive={mode==='name'} handleClick={() => {setMode('name')}}/>
            <ActiveButton name="keywords" isActive={mode==='keywords'} handleClick={() => {setMode('keywords')}}/>
          </div>
          <Link to={`/search/${val}/${mode}`}>
            <button
              type="button"
              className="search-form__button"
            >
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
