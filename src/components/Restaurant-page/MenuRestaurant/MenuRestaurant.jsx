import React from 'react'
import './MenuRestaurant.css'
import dish from './img/dish.png'

export function MenuRestaurant() {
    return(
        <li>
            <a href="javascript:void(0)" className="menu-restaurant">
                <div className="menu-restaurant__left">
                    <span className="menu-restaurant__title">Сельдь на бородинском хлебе</span>
                    <span className="menu-restaurant__consist">С яйцом и огурцом</span>
                    <span className="menu-restaurant__price">240 &#8372;</span>
                </div>
                <img src={dish} alt=""/>
            </a>
        </li>
    );
}