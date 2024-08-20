import React from 'react';

import Image from 'next/image';
import classes from "./cause-info.module.css"

const CauseInfo = ({ cause }) => {
    return (
        <div className={classes.CauseInfo}>
            <h4 className={classes.title}> { cause.title } </h4>
            <p className={classes.description}> { cause.description } </p>
            <Image src={cause.icon} alt='cause image' className={classes.image} width='20' height='90'/>
        </div>
    );
};

export default CauseInfo;
