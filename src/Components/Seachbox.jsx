import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './Searchbox.css';

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

    const SELECT_ONCHANGE_HANDLER = (e) => {
        console.log(e.target.value)
    }

    return (
        <section className='section-search'>

            <select className='select' onChange={SELECT_ONCHANGE_HANDLER}>
                <option className='select-option' value="name">Name</option>
                <option className='select-option' value="code">Code</option>
                <option className='select-option' value="curr">Currency</option>
                <option className='select-option' value="lang">Lang</option>
                <option className='select-option' value="captial">Capital</option>
                <option className='select-option' value="reg">Region</option>
            </select>

            <div className="vertical_line"></div>

            <input type="search" placeholder='Search'
                spellCheck="false" id="input-search"
                onChange={ONCHANGE_HANDLER} onKeyUp={ONKEYUP_HANDLER}
                value={searchDataStr} />

            <button className='search-btn shineEff'
                onClick={SEARCHBTN_ONCLICK_HANDLER}>
                {currentBtnIcon}
            </button>

        </section>
    )
}

export default Seachbox