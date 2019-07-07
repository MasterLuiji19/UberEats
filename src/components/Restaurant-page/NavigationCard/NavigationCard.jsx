import React from 'react';
import './NavigationCard.css';
import {restaurant} from '../infoCard.js';

export function NavigationCard() {
    return (
        <nav className="restaurant-navigation">
            <div className="restaurant-navigation__wrapper">
                <ul className="restaurant-navigation__nav">
                    {restaurant.sections.map ((section, i) => {
                        return(
                            <li key={i}>
                                <a className="restaurant-navigation__item"
                                   href={`#${section.title}`}>{section.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
