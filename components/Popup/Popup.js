'use client';

import React from 'react';

import classes from "./popup.module.css"

const Popup = ({ showPopup, setShowPopup }) => {
    return (
        <div>
            <div className={classes.bg}></div>
            <div className={classes.Popup}>
                {showPopup}
                <button className='button' style={{ width: '70%' }} onClick={() => setShowPopup('')}>Got It</button>
            </div>
        </div>
    );
};

export default Popup;