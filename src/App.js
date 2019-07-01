import React from 'react';
import './App.css';
import {GetHeader} from './components/Header/Header.jsx';
import {MainPage} from "./components/MainPage/MainPage.jsx";
import {Footer} from './components/Footer/Footer.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Restaurant} from "./components/Restaurant-page/Restaurant.jsx";

function App() {


    return (
        <>
            <Router>
                <GetHeader/>
                <Route path="/" exact component={MainPage} />
                <Route path="/Restaurant" component={Restaurant} />
                <Footer/>
            </Router>
        </>
    );
}
export default App;
