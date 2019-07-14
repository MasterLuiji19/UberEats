import {RestaurantCard} from "../RestaurantCard/RestaurantsCards.jsx";
import React from "react";
import {restaurants} from './menucards.js';
import './MenuCards.css';

export function MenuCards(props) {
    return (
        <div className="menu-cards">
            {restaurants
                .filter((restaurant) => restaurant.title.includes(props.searchValue))
                .map((restaurant, i) => {
                return (
                        <RestaurantCard
                            key={i}
                            title={restaurant.title}
                            priceBucket={restaurant.priceBucket}
                            imageUrl={restaurant.imageUrl}
                            categories={restaurant.categories}
                            etaRange={restaurant.etaRange}
                        />
                )
            })}
        </div>
    )
}
