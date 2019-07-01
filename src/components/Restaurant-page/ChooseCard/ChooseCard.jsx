import React from 'react';
import './ChooseCard.css';
import {MenuRestaurant} from "../MenuRestaurant/MenuRestaurant";

export function ChooseCard() {
    return (
    <>
        <div>
            <h2 className="choose__title">Закуски</h2>
        </div>
        <ul className="choose__first-line">
            <MenuRestaurant/>
            <MenuRestaurant/>
            <MenuRestaurant/>
            <MenuRestaurant/>
            <MenuRestaurant/>
            <MenuRestaurant/>
        </ul>
    </>
    );
}