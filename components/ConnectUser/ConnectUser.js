import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { Divider } from '@mui/material';

import googleLogo from '@/assets/googleLogo.png'
import classes from "./connect-user.module.css";

import UserFormBtn from './UserFormBtn';
import { handleUserForm } from '@/lib/actions';

const ConnectUser = ({ page, selectedCausesIds }) => {
    const isSignup = page === 'sign-up';    
    
    return (
        <div className={classes.ConnectUser}>
            <div className={classes.formContainer}>
                <Link href='https://www.google.com/' target="_blank" className={classes.googleBtn}>
                    <Image src={googleLogo} alt='arrow Icon' className='whiteArrowImg'/>
                    Continue with Google
                </Link>

                <Divider style={{ margin: '10% 0' }}>or</Divider>

                <form action={handleUserForm}>
                    {isSignup && <input type="text" id="name" name="name" placeholder='Your name' required />}
                    <input type="text" id="email" name="email" placeholder='Your email' required />
                    {selectedCausesIds.map((id, index) => (
                        <input key={index} type="hidden" name="causes[]" value={id} />
                    ))}
                    <p className={classes.fineprint}>You will receive a temporary password by email</p>
                    
                    <UserFormBtn isSignup={isSignup}/>
                </form>
            </div>
        </div>
    );
};

export default ConnectUser;