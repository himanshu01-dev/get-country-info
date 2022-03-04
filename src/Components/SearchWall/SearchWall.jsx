import React from 'react';
import EARTH_FROM_SPACE from '../../assets/home_wallpaper.jpg';
import Menu from '../Menu/Menu';
import "./SearchWall.css";
import Seachbox from '../Seachbox';

const SearchWall = () => {
    return (
        <section className='section_searchwall'>
            <img className='home_img' src={EARTH_FROM_SPACE} alt="earth-from-space-img" />
            <Menu />
            <Seachbox/>
        </section>
    )
}

export default SearchWall;