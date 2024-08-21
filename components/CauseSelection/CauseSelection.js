'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './cause-selection.module.css';
import arrow from '@/assets/whiteArrow.svg';
import Cause from '@/components/Cause/Cause';
import CauseInfo from '@/components/CauseInfo/CauseInfo';
import Popup from '@/components/Popup/Popup';
import { LinearProgress } from '@mui/material';

const MAX_SELECT = 3;

const CauseSelection = ({ causes }) => {
    const [selectedCauses, setSelectedCauses] = useState([]);
    const [showPopup, setShowPopup] = useState('');

    const handleSelectedCause = useCallback((selected) => {
        setSelectedCauses((prev) => {
            if (prev.includes(selected)) {
                return prev.filter(cause => cause !== selected);
            } else if (prev.length < MAX_SELECT) {
                return [...prev, selected];
            } else {
                setShowPopup('You can only select up to 3 causes.');
                return prev;
            }
        });
    }, []);

    const handleContinueBtn = (event) => {
        if (selectedCauses.length !== MAX_SELECT) {
            event.preventDefault();
            setShowPopup('Please pick 3 causes for your Giving Portfolio.');
        }
    };

    return (
        <div className={classes.CauseSelection}>
            <div className={classes.gridContainer}>
                <div className={classes.causeGrid}>
                    {causes.map((causeInfo) => (
                        <Cause
                            key={causeInfo.id}
                            causeInfo={causeInfo}
                            handleSelectedCause={handleSelectedCause}
                            isSelected={selectedCauses.includes(causeInfo)}
                        />
                    ))}
                </div>
                <div className={classes.progress}>
                    <p>{`${selectedCauses.length}/${MAX_SELECT} causes added`}</p>
                    <LinearProgress 
                        className={classes.progressBar} 
                        variant="determinate" 
                        value={(selectedCauses.length / MAX_SELECT) * 100} 
                    />
                    <Link 
                        href={{
                            pathname: "/sign-up", 
                            query: { causesIds: selectedCauses.map(cause => cause.id) }
                        }} 
                        className={`button ${classes.continueBtn}`} 
                        onClick={handleContinueBtn}
                    >
                        Continue
                        <Image src={arrow} alt="arrow Icon" className="whiteArrowImg" />
                    </Link>
                </div>
            </div>
            {selectedCauses.length > 0 && <CauseInfo cause={selectedCauses[selectedCauses.length - 1]} />}
            {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} />}
        </div>
    );
};

export default CauseSelection;
