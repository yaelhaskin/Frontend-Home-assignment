import React from 'react';

import ConnectUser from '@/components/ConnectUser/ConnectUser';
import PageHeader from '@/components/PageHeader/PageHeader';
import BackBtn from '@/components/BackBtn/BackBtn';

const LogInPage = () => {
    return (
        <section className='page'>
            <PageHeader/>
            <BackBtn />
            <ConnectUser page='login' selectedCausesIds={[]}/>
        </section>
    );
};

export default LogInPage;