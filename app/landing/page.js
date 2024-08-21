import React from 'react';

import arrow from '@/assets/whiteArrow.svg';
import Link from 'next/link';
import Image from 'next/image';

import classes from "@/app/page.module.css"

const LandingPage = () => {
    return (
        <section className='page'>
            Hello, nice to meet you!
            <Link href="/welcome" className={`button ${classes.LandingPageBtn}`}> 
                Continue
                <Image src={arrow} alt='arrow Icon' className='whiteArrowImg'/>
            </Link>
        </section>
    );
};

export default LandingPage;