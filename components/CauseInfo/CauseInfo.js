import React from 'react';

import Image from 'next/image';
import { Done } from '@mui/icons-material';
import classes from "./cause-info.module.css"

const CauseInfo = ({ cause }) => {
    return (
        <div className={classes.CauseInfo}>
            <h4 className={classes.title}> 
                <Done className={classes.check}/>
                { cause.title } 
            </h4>
            <p className={classes.description}> { cause.description } </p>
            <div className={classes.imageWrapper}>
                <Image 
                    src={cause.icon} 
                    alt='cause image' 
                    className={classes.image}
                    layout="responsive"
                    width={100} 
                    height={100} 
                />
            </div>
        </div>
    );
};

export default CauseInfo;
