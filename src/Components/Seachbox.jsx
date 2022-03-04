import React, { useState } from 'react';
import './Searchbox.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Seachbox = () => {
    const [currentBtnIcon, setCurrentBtnIcon] = useState(<SearchIcon />);
    const [searchDataStr, setSearchDataStr] = useState('');

    //WHEN ENTER KEY IS PRESSED ⌨!
    const ONKEYUP_HANDLER = (e) => {
        if (e.code === 'Enter' && e.keyCode === 13) {
            // WRITE STUFF TO SEARCH 'STRING' ON DATA
            console.log("searching....")
        }
    }

    // EVERYTIME KEY IS PRESSED,
    const ONCHANGE_HANDLER = (e) => {
        setSearchDataStr(e.target.value);
        if (e.target.value === "") {
            setCurrentBtnIcon(<SearchIcon />)
        } else {
            setCurrentBtnIcon(<CloseIcon />)
        }
    }

    //WHEN CLEARED BUTTON IS CLICKED!
    const SEARCHBTN_ONCLICK_HANDLER = () => {
        setSearchDataStr('');
    }

    return (
        <section className='section-search'>
            <select>
                <option value="">Name</option>
                <option value="">Code</option>
                <option value="">Currency</option>
                <option value="">Lang</option>
                <option value="">Capital</option>
                <option value="">Region</option>
            </select>

            <div className="vertical_line"></div>

            <input type="search" placeholder='Search'
                id="input-search"
                onChange={ONCHANGE_HANDLER} onKeyUp={ONKEYUP_HANDLER}
                value={searchDataStr} />

            <button className='search-btn shineEff' onClick={SEARCHBTN_ONCLICK_HANDLER}>{currentBtnIcon}</button>
        </section>
    )
}

export default Seachbox