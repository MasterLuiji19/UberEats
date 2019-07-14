import React from 'react';
import './Search.css';

export function Search(props) {
    function onInputHandler(event) {
        props.onSearchChange(event.target.value);
    }
    return (
        <section className="search">
            <label className="search__label">
                <input className="search__input" type="search" placeholder="Search for restaurant or cuisine" onInput={onInputHandler}/>
            </label>
        </section>
    );
}
