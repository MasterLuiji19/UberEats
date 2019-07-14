import React from 'react';
import './Search.css';
import search__img from './img/search.svg';

export function Search() {
    return (
        <section className="search">
            <label className="search__label">
                <input className="search__input" type="search" placeholder="Search for restaurant or cuisine"/>
            </label>
        </section>
    );
}
