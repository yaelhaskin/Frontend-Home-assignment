import React from 'react';

import ConnectUser from '@/components/ConnectUser/ConnectUser';
import PageHeader from '@/components/PageHeader/PageHeader';
import BackBtn from '@/components/BackBtn/BackBtn';

const SignUpPage = ({ searchParams }) => {
    const selectedCausesIds = searchParams.causesIds;    

    return (
        <section className='page'>
            <PageHeader/>
            <BackBtn />
            <ConnectUser page='sign-up' selectedCausesIds={selectedCausesIds}/>
        </section>
    )
}
export default SignUpPage;