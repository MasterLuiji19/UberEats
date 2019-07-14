import React from 'react';
import {Search} from "../Search/Search.jsx";
import './MainPage.css'
import {MenuCards} from "../MenuCards/MenuCards.jsx";

export class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }
    }

    updateSearchValue = (searchValue) => {
        this.setState( {
            searchValue: searchValue
        });
    }

    render() {
        const title = 'Kyiv Restaurants';
        return (
            <main className="main">
                <Search onSearchChange = {this.updateSearchValue}/>
                <section className="menu-block">
                    <h1 className="menu-block__title">{title}</h1>
                </section>
                <MenuCards searchValue = {this.state.searchValue}/>
            </main>
        )
    }
}