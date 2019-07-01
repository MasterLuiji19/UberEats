import React from 'react';
import './ChooseCard.css';
import {MenuRestaurant} from "../MenuRestaurant/MenuRestaurant";

export function ChooseCard() {
    return (
        <>
            <div className="choose__title">Закуски</div>
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