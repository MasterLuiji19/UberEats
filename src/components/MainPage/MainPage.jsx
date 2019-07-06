import React from 'react';
import {Search} from "../Search/Search.jsx";
import './MainPage.css'
import {MenuCards} from "../MenuCards/MenuCards.jsx";

export function MainPage() {
    return (
        <main className="main">
            <Search/>
            <section className="menu-block">
                <h1 className="menu-block__title">Kyiv Restaurants</h1>
            </section>
            <MenuCards/>
        </main>
    )
}