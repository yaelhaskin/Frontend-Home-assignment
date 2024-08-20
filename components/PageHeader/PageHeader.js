'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { text } from "@/app/data.json"
import classes from "./page-header.module.css"

const PageHeader = () => {
    const path = usePathname();    
    let curPage = text.filter((pageText) => pageText.path === path)[0];
    
    return (
        <header>
            <h1 className={classes.title}> { curPage.title } </h1>
            <h4 className={classes.subtitle}> { curPage.subtitle } </h4>
        </header>
    );
};

export default PageHeader;