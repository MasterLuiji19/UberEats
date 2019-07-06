import React from 'react';
import './Header.css';
import logo from './img/logo.svg';
import basket from './img/basket.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export function Header() {
    return (
            <header className="header">
                <div className="box-header">
                    <div className="box-header__logo">
                        <Link className="logo-header" to="/"><img className="logo" src={logo} alt="Logo" /></Link>
                    </div>
                    <div className="box-header__local">
                        <Link className="box-header__button button" href="blabla">asap</Link>
                        <span className="box-header__text">to</span>
                        <input className="box-header__address" type="search" placeholder="ul. Tarasivska St, 16 " />
                    </div>
                    <div className="registred-block">
                        <Link className="registred-block__sign button" href="blabla">Sign In</Link>
                        <Link className="registred-block__register button" href="blabla">Register</Link>
                        <Link className="registred-block__link" href="blabla"><img className="register-block__basket"
                                                                          src={basket} alt="basket" /></Link>
                    </div>
                </div>
            </header>
);
}
