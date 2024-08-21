"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 

import classes from './BackBtn.module.css'; 

const BackBtn = () => {
    const router = useRouter();

    return (
        <button onClick={() => {router.back()}} className={classes.BackBtn}>
            <ArrowBackIcon style={{ width: '50%' }}/>
        </button>
    );
};

export default BackBtn;
