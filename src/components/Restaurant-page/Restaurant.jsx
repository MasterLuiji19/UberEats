import React from 'react';
import './Restaurant.css';
import {Header} from '../Header/Header.jsx';
import {ContentCard} from '../Restaurant-page/ContentCard/ContentCard.jsx';
import {NavigationCard} from "./NavigationCard/NavigationCard.jsx";
import {ChooseCard} from '../Restaurant-page/ChooseCard/ChooseCard.jsx';

export function Restaurant() {
    return (
        <>
            <ContentCard/>
            <NavigationCard/>
            <ChooseCard/>
        </>
    )
}