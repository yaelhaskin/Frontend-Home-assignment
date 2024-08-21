import React from 'react';

import data from "@/app/data.json"
import classes from "./welcome.module.css";
import arrow from '@/assets/whiteArrow.svg';

import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader/PageHeader';

const text = data.data;
const listContent = text.find(pageText => pageText.path === '/welcome')['listContent'] || [];
// const listContent = text.filter((pageText) => pageText.path === '/welcome')[0]['listContent'];

const WelcomePage = () => {    
    return (
        <section className={`page ${classes.WelcomePage}`}>
            <PageHeader/>
            <ol className={classes.list}>
                {listContent.map((item) => (
                    <li key={item}>{ item }</li>
                ))}
            </ol>
            <Link href="/cause-selection" className={`button ${classes.WelcomePageBtn}`}> 
                Let's Start 
                <Image src={arrow} alt='arrow Icon' className='whiteArrowImg'/>
            </Link>
            <p className={classes.fineprint}>
                By continuing you agree to our<> </>
                <Link href="https://www.bono.so/tc" className={classes.link}>Terms and Conditions</Link>
                <> </>and<> </>
                <Link href="https://www.bono.so/privacy-policy" className={classes.link}>Privacy Policy</Link>
            </p>
        </section>
    );
};

export default WelcomePage;