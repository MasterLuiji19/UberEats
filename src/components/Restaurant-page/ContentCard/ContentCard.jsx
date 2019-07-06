import React from 'react';
import './ContentCard.css';
import {restaurant} from '../infoCard.js';


export function ContentCard() {
    const background = `url(${restaurant.largeImageUrl})`;
    return(
        <div className="restaurant-card" style={{backgroundImage: background}}>
            <div className="restaurant-card__wrapper">
                <div className="restaurant-card__background">
                    <span className="restaurant-card__title">{restaurant.title}</span>
                    <div className="restaurant-card__footer">
                        <span className="restaurant-card__price">{restaurant.priceBucket} • {restaurant.categories.map ((category) => {
                            return (category.name)})}
                        </span>
                        <span className="restaurant-card__time">{restaurant.etaRange.min} - {restaurant.etaRange.max} Min</span>
                    </div>
                </div>
            </div>
        </div>
    )
}