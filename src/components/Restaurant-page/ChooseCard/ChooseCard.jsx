import React from 'react';
import './ChooseCard.css';
import {MenuRestaurant} from "../MenuRestaurant/MenuRestaurant";

export function ChooseCard() {
    return (
        <ul className="choose__first-line">
            <span className="choose__title">Закуски</span>
            <MenuRestaurant/>
            <MenuRestaurant/>
            <MenuRestaurant/>
            <MenuRestaurant/>
            <MenuRestaurant/>
            <MenuRestaurant/>
        </ul>
    );
}