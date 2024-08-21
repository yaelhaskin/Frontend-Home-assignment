import React from 'react';
import { fetchCauses } from '@/lib/requests';

import PageHeader from '@/components/PageHeader/PageHeader';
import BackBtn from '@/components/BackBtn/BackBtn';
import CauseSelection from '../../components/CauseSelection/CauseSelection';

const CauseSelectionPage = async () => {
    const causes = await fetchCauses();

    return (
        <section className='page'>
            <PageHeader />
            <BackBtn />
            <CauseSelection causes={causes} />
        </section>
    );
};

export default CauseSelectionPage;
