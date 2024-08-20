'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Divider } from '@mui/material';

import googleLogo from '@/assets/googleLogo.png'
import arrow from '@/assets/whiteArrow.svg';
import classes from "./connect-user.module.css";

import PageHeader from '../PageHeader/PageHeader';

const ConnectUser = () => {
    const path = usePathname();
    const isSignin = path === '/sign-up';

    return (
        <div className={classes.ConnectUser}>
            <PageHeader/>
            <div style={{ width: '50%' }}>
                <Link href='https://www.google.com/' target="_blank" className={classes.googleBtn}>
                    <Image src={googleLogo} alt='arrow Icon' className='whiteArrowImg'/>
                    Continue with Google
                </Link>

                <Divider style={{ margin: '10% 0' }}>or</Divider>

                {isSignin && <input placeholder='Your name'></input>}
                <input placeholder='Your email'></input>
                <p className={classes.fineprint}>You will receive a temporary password by email</p>
            </div>

            <Link href="/" className={`button ${classes.continueBtn}`}>
                {isSignin ? 'Save and Continue' : 'Login'}
                <Image src={arrow} alt="arrow Icon" className="whiteArrowImg" />
            </Link>
        </div>
    );
};

export default ConnectUser;