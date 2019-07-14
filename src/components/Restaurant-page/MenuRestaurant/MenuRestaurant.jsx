import React from 'react'
import './MenuRestaurant.css'
import {restaurant} from '../infoCard.js';
import dishCard from './img/dish-card.png'

export function MenuRestaurant(props) {
    let dishPhoto = restaurant.items[props.id].imageUrl;
    return(
        <li>
            <a href="javascript:void(0)" className="menu-restaurant">
                <div className="menu-restaurant__left">
                    <span className="menu-restaurant__title">
                        {restaurant.items[props.id].title}
                    </span>
                    <span className="menu-restaurant__consist">{restaurant.items[props.id].itemDescription}</span>
                    <span className="menu-restaurant__price">{restaurant.items[props.id].price/100} &#8372;</span>
                </div>
                {dishPhoto ? (
                    <img className="menu-restaurant__image" src={restaurant.items[props.id].imageUrl} alt=""/>)
                    : <img className="menu-restaurant__image" src={dishCard} alt=""/>}
            </a>
        </li>
    );
}