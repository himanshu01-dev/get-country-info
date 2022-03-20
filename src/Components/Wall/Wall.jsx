import React, { useState } from 'react';
import EARTH_FROM_SPACE from '../../assets/home_wallpaper.jpg';
import Menu from '../Menu/Menu';
import Searchbox from '../SearchBox/SearchBox';
import CountryCard from '../CountryCard/CountryCard'
import axios from 'axios';
import "./Wall.css";

const baseURL = 'https://restcountries.com/v3.1';

const Wall = () => {

    const [currentData, setCurrentData] = useState('')

    const getData = (type, name) => {
        axios.get(baseURL + type + name)
            .then((response) => setCurrentData(response.data))
    }

    const DATA_FROM_SEARCHBOX = (data) => {
        getData(data.type, data.str)
    }

    return (
        <section className='section_searchwall'>
            <img className='home_img' src={EARTH_FROM_SPACE} alt="earth-from-space-img" />
            <Menu />
            <Searchbox data={DATA_FROM_SEARCHBOX} />

            {/* {currentData.forEach(element => {
                CONTINUE FROM HERE 
             })} */}
        </section>
    )
}

export default Wall;