import React, {FC} from 'react';
import "./SearchForm.scss"
import {ActiveButton} from "../ActiveButton/ActiveButton";

type SeachFormProps = {}

export const SearchForm: FC<SeachFormProps> = ({}) => {
  return (
    <div className="search-container">
      <div className="search-form">
        <input
          type="search"
          id="site-search"
          name="q"
          placeholder="Your search input"
          className="search-form__input"
        />
        <div className="search-form__additions">
          <div className="search-form__search-by">
            <span>search by </span>
            <ActiveButton name="name" isActive={true} handleClick={() => {}}/>
            <ActiveButton name="keywords" isActive={false} handleClick={() => {}}/>
          </div>
          <button
            type="button"
            className="search-form__button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
