import React, {FC, useEffect, useState} from 'react';
import "./SearchForm.scss"
import {ActiveButton} from "../ActiveButton/ActiveButton";
import {Link, useNavigate} from "react-router-dom";

type SeachFormProps = {}

export const SearchForm: FC<SeachFormProps> = ({}) => {
  const [val,setVal] = useState('');
  const [mode, setMode] = useState('name');
  const navigate = useNavigate();

  useEffect(() => {
    if (val.length)
      navigate(`/search/${val}/${mode}`);
  },[val, mode])

  const handleValChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value === ""){
      setVal("empty");
      return;
    }
    setVal(e.target.value);
  }

  return (
    <div className="search-container">
      <div className="search-form">
        <input
          type="search"
          id="site-search"
          name="q"
          placeholder="Начните вводить"
          className="search-form__input"
          onChange={handleValChange}
          maxLength={50}
          autoFocus={true}
        />
        <div className="search-form__additions">
          <div className="search-form__search-by">
            <span>Поиск по</span>
            <ActiveButton name="Названию" isActive={mode==='name'} handleClick={() => {setMode('name')}}/>
            <ActiveButton name="Ключевым словам" isActive={mode==='keywords'} handleClick={() => {setMode('keywords')}}/>
          </div>
          <Link to={`/search/${val}/${mode}`}>
            <button
              type="button"
              className="search-form__button"
              disabled={val === ""}
            >
              Поиск
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
