import React from 'react';
import './Header.css';
import HeaderTitle from "./HeaderTitle";


const HeaderContent = () => {
    return ( 
    <div className="header-content">
    <HeaderTitle />
    <span className="plain-text-top">Let 's learn React by building simple interfaces with components. Don'
        t
        try to overthink it, just keep it simple and have fun.Once you feel comfortable using componenets you are well on your way to mastering React! 
        </span>
    </div>
    );
};




export default HeaderContent;