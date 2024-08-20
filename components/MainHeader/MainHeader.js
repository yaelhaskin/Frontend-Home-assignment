import React from 'react';
import Link from "next/link";
import Image from "next/image";

import logoImg from '@/assets/logo.png'

import classes from "./main-header.module.css"

const MainHeader = () => {
    return (
        <heared className={classes.MainHeader}>
            <Image src={logoImg} alt='Bono logo' priority className={classes.logo}/>
            <Link href="/login" className={classes.loginBtn}>LOGIN</Link>
        </heared>
    );
};

export default MainHeader;