import React from 'react';
import './ChooseCard.css';
import {MenuRestaurant} from "../MenuRestaurant/MenuRestaurant";
import {restaurant} from '../infoCard.js';

export function ChooseCard(props) {
    return (
        <div className="choose-card">
            {restaurant.sections.map(section => {
                return (
                    <div className="choose-type">
                        <h2 className="choose-title" id={`${section.title}`}>
                            {section.title}
                        </h2>
                        <div key={section.title}>
                            <div className="choose__first-line">
                                {section.itemUuids.map(itemUuid => {
                                    return (
                                        <MenuRestaurant
                                            key={itemUuid}
                                            id={itemUuid}
                                            order={props.order}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}