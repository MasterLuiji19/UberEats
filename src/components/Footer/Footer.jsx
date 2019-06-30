import React from 'react';
import './Footer.css';
import LogoFooter from './img/white-logo.svg';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <a className="logo-footer" href=""><img className="footer__logo" src={LogoFooter} alt="Logo-footer"/></a>
            </div>
        </footer>
    )
}