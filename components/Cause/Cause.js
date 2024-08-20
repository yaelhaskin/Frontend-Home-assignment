'use client'

import React from 'react';

import classes from "./cause.module.css"
import { Done, AddCircleOutline } from '@mui/icons-material';

const Cause = ({ causeInfo, handleSelectedCause, isSelected }) => {
    
    return (
        <div style={{ backgroundColor: causeInfo.impactBackground}} className={classes.Cause}>
            {causeInfo.title}
            { isSelected ? 
                <Done onClick={() => handleSelectedCause(causeInfo)} className={`${classes.button} ${classes.selected}`}/>
                :
                <AddCircleOutline onClick={() => handleSelectedCause(causeInfo)} className={classes.button}/>
            }
        </div>
    );
};

export default Cause;
