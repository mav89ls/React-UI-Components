import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";



const CardContainer = () => {
    return (
        <div className="card-container">
        <a href="https://www.reactjs.org">
            <CardBanner />
            <div className = "card-content">
                <h1 className="second-title">Get Started with React</h1>
                <p className="text-bottom">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
                <p className="gray-text">reactjs.org</p>
            </div>
            </a>
        </div>
    );
};

export default CardContainer;
