'use client';

import { useFormStatus } from 'react-dom';
import Image from 'next/image';

import arrow from '@/assets/whiteArrow.svg';
import classes from "./connect-user.module.css";

const UserFormBtn = ({ isSignup }) => {
    const { pending } = useFormStatus();

    return <button disabled={pending} type="submit" className={`button ${classes.UserFormBtn}`}>
        {pending ? 'Submitting...' : (isSignup ? 'Save and Continue' : 'Login')}
        <Image src={arrow} alt="arrow Icon" className="whiteArrowImg" />
    </button>
}

export default UserFormBtn;