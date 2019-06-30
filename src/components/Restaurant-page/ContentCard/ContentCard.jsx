import React from 'react';
import './ContentCard.css';

export function ContentCard() {
    return(
        <div className="restaurant-card">
            <div className="restaurant-card__wrapper">
                <div className="restaurant-card__background">
                    <span className="restaurant-card__title">Трактир «Пушкин»</span>
                    <div className="restaurant-card__footer">
                        <span className="restaurant-card__price">₴₴₴ • Европейская</span>
                        <span className="restaurant-card__time">40 - 50 Min</span>
                    </div>
                </div>
            </div>
        </div>
    )
}