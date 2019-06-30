import React from 'react';
import './RestaurantsCards.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export function RestaurantCard(props) {
    return (
        <div className="card">
            <Link className="card__link"  to="/Restaurant">
                <img className="card__img" src={props.imageUrl} alt=""/>
                <h4 className="card__title">{props.title}</h4>
                <p className="card__categories">
                    {props.priceBucket} {props.categories.map ((category) => {
                            return (' • ' + category.keyName)
                    })}
                </p>
                <p className="card__time-delivery">
                    {props.etaRange.min} - {props.etaRange.max} Min
                </p>
            </Link>
        </div>
    )
}