import React from 'react';
import './NavigationCard.css';

export function NavigationCard() {
    return (
        <nav className="restaurant-navigation">
            <div className="restaurant-navigation__wrapper">
                <ul className="restaurant-navigation__nav">
                    <li className="restaurant-navigation__item">Закуски</li>
                    <li className="restaurant-navigation__item">Салаты</li>
                    <li className="restaurant-navigation__item">Супы</li>
                    <li className="restaurant-navigation__item">Горячие блюда</li>
                    <li className="restaurant-navigation__item">Гарниры</li>
                    <li className="restaurant-navigation__item">Десерты</li>
                </ul>
            </div>
        </nav>
    )
}
