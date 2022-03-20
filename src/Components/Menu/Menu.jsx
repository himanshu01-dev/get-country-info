import React from 'react';
import "./Menu.css";

const GITHUB_PROFILE_LINK = 'https://github.com/himanshu01-dev/get-country-info';

const Menu = () => {
    return (
        <ul className='menu_ul'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href={GITHUB_PROFILE_LINK} target="_blank">Github</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    )
}

export default Menu