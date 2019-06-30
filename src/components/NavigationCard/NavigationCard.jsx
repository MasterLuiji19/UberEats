import React from 'react';
import './NavigationCard.css';

export function NavigationCard() {
    return (
        <nav className="restaurant-navigation">
            <ul className="restaurant-navigation__nav">
                <li><a className="restaurant-navigation__item" href="javascript:void(0)">Закуски</a></li>
                <li><a className="restaurant-navigation__item" href="javascript:void(0)">Салаты</a></li>
                <li><a className="restaurant-navigation__item" href="javascript:void(0)">Супы</a></li>
                <li><a className="restaurant-navigation__item" href="javascript:void(0)">Горячие блюда</a></li>
                <li><a className="restaurant-navigation__item" href="javascript:void(0)">Гарниры</a></li>
                <li><a className="restaurant-navigation__item" href="javascript:void(0)">Десерты</a></li>
            </ul>
        </nav>
    )
}
