import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './SearchBox.css';

const Searchbox = (props) => {
    const [currentBtnIcon, setCurrentBtnIcon] = useState(<SearchIcon />);
    const [searchDataStr, setSearchDataStr] = useState('');
    const [searchDataType, setSearchDataType] = useState('/name/')

    //WHEN ENTER KEY IS PRESSED ⌨!
    const ONKEYUP_HANDLER = (e) => {
        if (e.code === 'Enter' && e.keyCode === 13) {
            // PASSING DATA TO WALL.jsx
            props.data({ type: searchDataType, str: searchDataStr });
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
        setSearchDataType(e.target.value)
        // console.log(searchDataType);
    }

    return (
        <section className='section-search'>

            <select className='select' onChange={SELECT_ONCHANGE_HANDLER}>
                <option className='select-option' value="/name/">Name</option>
                <option className='select-option' value="/alpha/">Code</option>
                <option className='select-option' value="/currency/">Currency</option>
                <option className='select-option' value="/lang/">Lang</option>
                <option className='select-option' value="/capital/">Capital</option>
                <option className='select-option' value="/region/">Region</option>
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

export default Searchbox;