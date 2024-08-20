import React from 'react';
import { fetchCauses } from '@/lib/fetchCauses';
import PageHeader from '@/components/PageHeader/PageHeader';
import CauseSelection from './CauseSelection';
import classes from './cause-selection.module.css';

const CauseSelectionPage = async () => {
    const causes = await fetchCauses();

    return (
        <section className={classes.CauseSelectionPage}>
            <PageHeader />
            <CauseSelection causes={causes} />
        </section>
    );
};

export default CauseSelectionPage;
