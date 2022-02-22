import React from 'react';
import EARTH_FROM_SPACE from '../../assets/home_wallpaper2.jpg';
import Menu from '../Menu/Menu';
import "./SearchWall.css";

const SearchWall = () => {
    return (
        <section>
            <img className='home_img' src={EARTH_FROM_SPACE} alt="earth-from-space-img" />
            <Menu />
        </section>
    )
}

export default SearchWall;